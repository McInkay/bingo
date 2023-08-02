const youtubedl = require('youtube-dl-exec')

const playlists = [
    "PLS1bpzs0ih2WrGDZWPCcec2h4-mNEQxZH",
    "PLS1bpzs0ih2VNJe1AbVhCAV9336lE0YyR",
    "PLS1bpzs0ih2XDJw9JFzYjiV8fyn-uYNOx",
    "PLS1bpzs0ih2XpWuBzlZ51BDAofJWjdliD",
    "PLS1bpzs0ih2UREIBltJL-M3PdgPL9YEv-",
    "PLS1bpzs0ih2XhYTqKAsQAXCMvqSjM9SUc",
    "PLS1bpzs0ih2XYzbUzeEjPKz6EYh0hgyh1",
    "PLS1bpzs0ih2XpWMZPWk9z3EM_yACGD1ge",
    "PLS1bpzs0ih2VyYTscAVVMsXnxt6ZhFQ2L",
    "PLS1bpzs0ih2UrJqNzty6h7XKFZcNukf9W",
]

playlists.forEach((id) => {
    youtubedl(`https://www.youtube.com/playlist?list=${id}`, {
        skipDownload: true,
        abortOnError: false,
        dumpSingleJson: true,
        noWarnings: true,
        ignoreErrors: true,
    }).then(output => output.entries.forEach((e) => console.log(e.uploader)))
})