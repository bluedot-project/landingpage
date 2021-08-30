const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'bluedot900214@gmail.com',
    pass: '-',
  },
  tls: {
    rejectUnauthorized: false
  }
})
const send = ({ email, name, phoneNumber, title, text }) => {
  const from = email;
  const message = {
    from,
    to: "bluedot900214@gmail.com",
    subject: `${title} : 랜딩페이지 Contact를 통한 메세지 ${from}`,
    text: `<p> 이름/아티스트명: ${name} <p> </br>
            <p> 내용: ${text} <p> </br>
            <p> 연락처: ${phoneNumber} <p>`,
    html: `<p> 이름/아티스트명: ${name} <p> </br>
    <p> 내용: ${text} <p> </br>
    <p> 연락처: ${phoneNumber} <p>`,
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
module.exports = send