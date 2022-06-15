const fs = require("fs");
const uuid = require("uuid");

exports.persistNumber = async (req, res) => {
    const number = req.body.data;
    let id = req.headers.id;
    if(!id){
        id = uuid.v4();
    }
    if(Number.isNaN(+number)){
        return res.status(400).json({
            error: "Output is not a number!"
        });
    }
    fs.writeFile(`./persistence/${id}.txt`, number, err => {
        if(err){
            return res.status(500).json({
                error: "Failed to save number :("
            });
        }
        return res.status(200).json({
            id: id,
            message: `Successfully saved ${number} to file!`
        });
    });
}

exports.readNumber = async (req, res) => {
    const id = req.headers.id;
    if(!id){
        return res.status(404).json({
            error: "File id not found! Have you saved a number before?"
        });
    }
    fs.readFile(`./persistence/${id}.txt`, {encoding: "utf-8"}, (err, data) => {
        if(err){
            console.log(err);
            return res.status(404).json({
                error: "File not found :("
            });
        }
        return res.status(200).json({
            message: `Successfully read ${data} from file!`,
            data: data
        });
    });
}