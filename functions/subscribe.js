const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_API)
const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const { hidden, email } = body

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: {
        Allow: 'Get',
      },
    }
  }

  if (!hidden || hidden !== 'ask-question')
    return {
      statusCode: 500,
    }

  try {
    await mailchimp.request({
      method: 'post',
      path: `/lists/${mailchimpAudienceId}/members`,
      body: {
        email_address: email,
        status: 'subscribed',
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World ',
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'error subscribe' + e,
      }),
    }
  }
}
