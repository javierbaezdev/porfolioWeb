const sendEmail = (emailAddress: string) => {
  const mailtoLink = `mailto:${emailAddress}`

  window.location.href = mailtoLink
}

export default sendEmail
