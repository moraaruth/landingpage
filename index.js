document.addEventListener("DOMContentLoaded", function(){

    const slackNameElement = document.querySelector('[data-testid="slackUserName"]')
    slackNameElement.textContent = "Ruth Moraa"

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDate = new Date();
    const currentDayOfWeek = dayOfWeek[currentDate.getUTCDay()]
    const currentDayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]')
    currentDayOfWeekElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`

    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]')
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentDate.getTime()} milliseconds`
})