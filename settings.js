/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA61Vy46jRhT9l9riaYMxL0stBfO2jdsYbGNHUYShCjBPF/iBR55lllEyWfcyUqT8Rb6oPyGi3a1pKcmkIwUJCRVV9557z7mnPoK8iCs4hg0YfAQljo9eDdvPuikhGIDhASGIQQcEXu2BAWimGuVSRjTCyHXQXstGisZ6Fl3SUUqOchpN546hMexmId6DaweUh20a+18JOCzCHB/MgIpW5IMipDWGXXHsPeyaBq915TzZn4rtbrrbWOE9uLYRvRjHeaiUEcwg9tIxbGZejN8J39AvrNYow65jM3OM3KO5yPdwPqGVraCeNKnbk8QI6ayWvBP+kmvivV7oFnc6b8zVRlPqE7t3g0Qmlue+Fx822yy1jlXK3+BXcZjDwAhgXsd18+6+J0Nm0eflwEpJxUBLNDO7kXgIx+oF2SUx580QhyhBRzez3gc83A8Jn+ohOPfH6/yUsvraKIfdPrHQH4zUNphTZp0Rorih+Bb4DL9qJfkvfbfH2wZzRjINDX/FbLvkqH+yNUo4OrsJja1zTNQ0nPU2lFq9D345cXZeb2PWaH+2TB+RUXwMp4wbXIa+zldzlRDGqekolPsGvlcf8NdQnrRj5mprn9LokmrGhOPGiYqgF5XOejhcRqbBX+IZ1LupQTjz/txZGPHYDQ1rTGiCQ9mu7ywuLM/MjxUrUL5HVLgST/fPFSWwMQIwoK4dgGEYVzX26rjI2zWG7QAvONrQx7B+7i7QZrtw+xAKl95J1yS1yNKDXrFyIEZrS0wvY0saCiPVmcnp4h50QIkLH1YVDPS4qgvcmLCqvBBWYPDtM1FtzRhmRQ1HcQAGoMf0KZLlSYGi2G+qu1Pk1ZVXlnc5rEEHIFxkJgSDGh9gBzwfIHlSZDiFoYY0pTC0TCsqxfbl3pDlSFnqc22F2S2pE2ewqr2sBAOK6zMURZI97tr5f3DQpEgrEsdTjCRzAsXTEiUPSU4W6D7JqDTzdRxs7/pdB+TwXN9k3DafpjoAxbiqF/mhTAsveNX460/P94tDXttN7kvtB8Rg8GYZ1nWch1Vb2SH3sB/FRyi1dYAB8tIKXjsggMfYh2084Ba7bIPpvYNXoq1sEs0u1nOxZTAq8tsWYYsY5CP+Q5/soQ99loYfeEjCD5DiEWQhDDgmAG07bg7SnvlHQRPLY7QnIqK/Fs+xF8Owqx6IXSnONPNZlDclQgyD1y5vPT85lE6RwPxr5rEsIgHJtUBKmzhOd+q6RNMuSzjb05u4N4WDwccvri0VQRuP501JX81N0LLV5vmLGgYM+VdB5F67G3z649e7u6fHn39/evz8Q/t+//T4829Pj59/fHr8/NPT4+df7u7++PVTC+SFpTZFAGsvTiswAJLhJOcNLymzlZ74oqaJp1CUwpaGV1ZfzeI2jfxUrOCIy0Tf3UuprdqH+a5ZrC4PZMMXax4iirqYee6Gtnj/N0HaeaYtkuEI3ZhN2UZxOdlH0sPurO8sYbE8kum+UTF7hlYzKvByNikshkQckyG4pfCEOIrJxPGMk/BgpNlW5W0vnU5U2bpvs93U9TYZvcZJPlteyqhXLOWDQmqzkd3d2rb8gPJury+71XqkX/rWebMchys2QXNHMDPO0FabteLuCKIeq5ckbORMTBWzm9FjWwpvNvZso+nL9RW/OMxNiyiGz7fBC0v/yuaXsSCvnTcxXu6Xf7pwkWxN9Bgyoa6yYbmIFjhZ86laXWrzONZmei4E/mXEUH0lBNd23svUq1GBMzAAVbb1QAekXlWLX8b6b5yCEjoga8SytGuvfnUDILbPVKnB9U9Ss0thNwkAAA==';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
