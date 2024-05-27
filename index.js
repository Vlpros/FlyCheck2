// const express=require('express')
// const PORT = process.env.PORT || 4040 
// const app = express()
// app.use(express.json())
// app.post("*",async (req,res)=>{
//     res.send('hello post')
// })
// app.get("*",async (req,res)=>{
//     res.send('hello get')
// })
// app.listen(PORT,function (err){
//     if(err)console.log(err)
//         console.log("server lister ",PORT)
// })



const axios = require('axios');
const TelegramApi = require('node-telegram-bot-api')
const token ="7239735221:AAHb4hw6bXORB91jgeXnzlZxpTCVc3irdQw"
const bot =new TelegramApi(token,{polling:true})

bot.on('message',msg=>{
    
    const chatId=msg.chat.id 
    let data 
    async function fetchHtml() {
        try { 
            const response = await axios.get('https://lyssa.aviasales.ru/date_picker_prices?currency=rub&depart_date=2024-06-06&depart_months[]=2024-06-01&depart_months[]=2024-07-01&destination_iata=SVO&market=ru&one_way=false&origin_iata=BEG&return_months[]=2024-06-01&return_months[]=2024-07-01');  
           
             data= await response.data.prices.map((item)=>`${item.price}`)
            
            console.log(data) 
            setTimeout(()=>{
              bot.sendMessage(chatId,`${data}`)   
            },3000)
    
        } catch (error) {
            console.error('Error fetching the HTML:');
        }
    }
    
    
    fetchHtml();
    
    // setInterval(()=>{
    //     bot.sendMessage(chatId,'сообщение спустя 5 секунд')
    // } ,5000 )
    
    
    

})

// function getCurrentDate() {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0'); 
//     const day = String(today.getDate()).padStart(2, '0');

//     return `${year}-${month}-${day}`;
// }

// const currentDate = getCurrentDate();
// console.log(currentDate);



