const { Problem, PracticeSubmission } = require("../models").sequelize.models
const cheerio = require("cheerio")
const axios = require("axios")

const createProblem = async (req, res, next) => {
  let { link, verdict, solveTime, pid, judgeId } = req.body
  let userId = req.user.id

  try {
    let problemId
    const problem = await Problem.findOne({ where: { pid } })
    if (problem) {
      problemId = problem.dataValues.id
    } else {
      const response = await axios(link)
      const $ = cheerio.load(response.data)
      const problemExists = $(".title a").html() === null

      if (!problemExists) {
        return res.status(400).json({
          status: "error",
          message: "Invalid problem link.",
        })
      }

      const name = $(".title").html().split(". ")[1]
      const newProblem = await Problem.create({
        pid,
        name,
        judgeId,
        solveTime,
      })
      problemId = newProblem.dataValues.id
    }
    const [newSubmission, created] = await PracticeSubmission.findOrCreate({
      where: { userId, problemId },
      defaults: {
        userId,
        problemId,
        solveTime,
        verdict,
      },
    })
    if (!created) {
      return res.status(400).send({
        status: "error",
        message: "You already added this problem",
      })
    }
    res.status(201).send({
      status: "success",
      data: newSubmission,
    })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

const getAllProblems = async (req, res, next) => {
  const userId = req.user.id
  try {
    const problems = await PracticeSubmission.findAll({
      include: { model: Problem, as: "problem" },
      where: { userId },
      order: [["createdAt", "DESC"]],
    })
    res.status(200).json({
      data: problems,
    })
  } catch (err) {
    res.json(err)
  }
}

const deleteProblem = async (req, res, next) => {
  const userId = req.user.id
  const { id } = req.params

  try {
    const isDeleted = await PracticeSubmission.destroy({
      where: { id, userId },
    })

    if (!isDeleted) {
      return res.status(400).json({
        status: "error",
        message: "Something went very wrong",
      })
    }

    res.status(204).json({
      status: "success",
    })
  } catch (err) {
    res.json(err)
  }
}

module.exports = { createProblem, getAllProblems, deleteProblem }
