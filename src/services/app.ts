import express, { Request, Response} from "express"
import Sender from '../sender'

//const start = new Start()
const sender = new Sender()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/status", (req: Request, res: Response) => {
  return res.send({
    qr_code: sender.qrCode,
    connected: sender.isConnected,
  })
})

app.post("/send", async (req: Request, res: Response) => {
  const { number, message } = req.body
  try {
    // await sender.sendText("5599985033139@c.us", "Teste de automatização whatsapp")
    await sender.sendText(number, message)
    return res.status(200).json()
  } catch (error) {
    console.log("error", error)
    res.status(500).json({ status: "error", message: error })
  }
  
})

app.listen(5000, () => {
  console.log("server is running")
})

