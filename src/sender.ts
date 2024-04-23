import { Message, Whatsapp, create, SocketState } from "venom-bot"

export type QRCode = {
  base64Qr: string
  attempts: number
}

class Sender {
  private client: any
  private connected: any
  private qr: any

  get isConnected(): boolean {
    return this.connected
  }

  get qrCode(): QRCode {
    return this.qr
  }

  constructor() {
    this.initialize()
  }

  async sendText(to: string, body: string) {
    await this.client.sendText(to, body)
  }

  private initialize() {

    // const qr = (base64Qr: string, attempts: number) => {
    //   this.qr = { base64Qr, attempts }
    // }

    // const status = (statusSession: string) => {
    //   // isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser

    //   this.connected = ["isLogged", "qrReadSuccess", "chatsAvailable"].includes(
    //     statusSession
    //   )
    // }

    const start = (client: Whatsapp) => {
      this.client = client

      client.onStateChange((state) => {
        this.connected = state === SocketState.CONNECTED
      })

    }

    console.log('staus')

    create({
      session: 'teste', //name of session
      disableWelcome: true,
    })
    .then((client: Whatsapp) => start(client))
    .catch((erro) => {
      console.log(erro);
    });

  }

}

export default Sender
