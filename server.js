import dotenv from 'dotenv';
dotenv.config();
import Discord from 'discord.js';
// Create a discord client
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();

// Define a prefix
let prefix = '$';
const disBot = async() => {
        try {
            // On Ready event
            client.on('ready', () => {
                console.log(`Logged in as ${client.user.tag}`);
            });
            // ON MESSAGE EVENT
            client.on('message', msg => {
                // Return if there is no prefix
                if (!msg.content.startsWith(prefix) || msg.author.bot) return;

                // Message reply
                if (msg.content.toLowerCase() === `${prefix}ping`) {
                    // Reply
                    msg.reply('Pong');
                };

                // React
                if (msg.content.toLowerCase() === `${prefix}love`) {
                    msg.react('🥰');
                }
                // User info
                if (msg.content.toLowerCase() === `${prefix}user-info`) {
                    msg.channel.send(`Your username: ${msg.author.username}`);
                };

                // Attach img file
                if (msg.content.toLowerCase() === `${prefix}img`) {
                    let imgEmbed = embed.attachFiles(['./img/img.jpg']);
                    // Send
                    msg.channel.send(imgEmbed);
                }
            });

            // On delete message event
            client.on('messageDelete', msg => {
                msg.channel.send(`${msg} deleted.`);
            });

            // Login use the token
            client.login(process.env.DISCORD_TOKEN);
        } catch (err) {
            if (err) throw err;
        }
    }
    // Run server bot
disBot();