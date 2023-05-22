const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());

/////////schema//////
const ExamSchema=new mongoose.Schema({
   date:Number,
   description:String,
   likes:Number,
   comments:Number,
   title:String
});

const ExamModel=mongoose.model("Exam",ExamSchema);
/////////////////////All
app.get("/api/exams", async (req, res) => {
    const { name } = req.query;
    const exams = await ExamModel.find();
    if (!name) {
      res.status(200).send(exams);
    } else {
      const searchedExams = exams.filter((x) =>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      );
      res.status(200).send(searchedExams);
    }
  });

//////////////////id
app.get("/api/exams/:id", async (req, res) => {
    const { id } = req.params;
  
  
      const exam = await ExamModel.findById(id);
      if (exam) {
        res.status(200).send(exam);
      } else {
        res.status(404).send("exam not found");
      }
  
  });
///////////////////Delete
app.delete("/api/exams/:id", async (req, res) => {
    const { id } = req.params;
    
    const deletedExam = await ExamModel.findByIdAndDelete(id);
    if (deletedExam) {
      res.status(200).send(`Exam ${deletedExam.name} deleted successfully!`);
    } else {
      res.status(404).send("Exam not found");
    }
  
  });
  ////////////////////Post
app.post("/api/exams", async (req, res) => {
    const { date,description,likes,comments,title } = req.body;
  
      const newExam = new ExamModel({
        date:date,
        description:description,
        likes:likes,
        comments:comments,
        title:title
    
      });
      await newExam.save();
      res.status(201).send(newExam);  
  
  });
////////////////Put
app.put("/api/exams/:id", async (req, res) => {
    const { id } = req.params;
    const { date,description,likes,comments,title } = req.body;
  
  
      const updatedExam = await ExamModel.findByIdAndUpdate(
        id,
        {
            date:date,
            description:description,
            likes:likes,
            comments:comments,
            title:title
         
        },  
        { new: true }
      );
  
      if (updatedExam) {
        res.status(200).send(updatedExam);
      } else {
        res.status(404).send("Exam not found");
      }
  
  });




  

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});

DB_PASSWORD = process.env.DB_PASSWORD;
DB_CONNECTION = process.env.DB_CONNECTION;

mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Mongo DB connected!");
});