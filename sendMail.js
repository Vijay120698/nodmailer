// const nodeMailer =require('nodemailer');
// const pdfDoc = require('pdfkit');
// const fs=require("fs");
// const doc= new pdfDoc();
// const crypto=require('crypto')

// doc.pipe(fs.createWriteStream("output.pdf"));



// const html=`
//     <h1> Nagercoil</h1>      
//     <p> Nagercoil, also spelt as Nagarkovil[note 1] ("Temple of the Nāgas", or Nagaraja-Temple), is a city and the administrative headquarters of Kanyakumari District in Tamil Nadu state, India. Situated close to the tip of the Indian peninsula, it lies on an undulating terrain between the Western Ghats and the Arabian Sea. [4][5]


// Nagaraja Temple at Nagercoil
// The present city of Nagercoil grew around Kottar, a mercantile town that dates back to the Sangam period.[6] Kottar is now a locality within the city limits. Nagercoil was a major town in the erstwhile Travancore kingdom till 1956. In 1956, Kanyakumari District, along with the town, was merged with Tamil Nadu.[7]

// Nagercoil is a centre for a range of economic activities in the small but densely-populated Kanyakumari District. Economic activities in and around the city include tourism, wind energy, IT services, marine fish production and exports, rubber and cloves plantations, agro-crops, floral production, manufacture of fishnets, rubber products among other activities.[8]</p> `
// ;

// var sender=nodeMailer.createTransport({
//     service:'gmail',
//     auth:{
//         user: 'vijaydemo122412@gmail.com',
//         pass: '' //vqgh zxyj vaem snyq
//     }
// });

// var composemail={
//     from: 'vijaydemo122412@gmail.com',
//     to: 'vijayvincent12@gmail.com',
//     subject: 'send mail using node..........',
//     html:html,
//     text:'please find the attached PDF....',
//     attachments:[{
//         filename:'output.pdf',
//         path:'output.pdf',
//         contentType:'application/pdf'
//     }]
// };

// sender.sendMail(composemail,function(error,info)
// {

//     if(error)
//     {
//         console.log(error);

//     }
//     else
//     {
//         console.log("Mail sent Succesfully " +info.response);
//     }
// })

// doc.pipe(fs.createWriteStream("output.pdf"));

// // Setting the fill color to green and
// // font size to 30
// doc.fillColor("green")
//     .fontSize(30)
//     .text("Nagercoil");

// // Setting the fill color to black and
// // font size to 15
// doc.fillColor("black")
//     .fontSize(15)
//     .text("Nagercoil (Temple of the Nāgas) is a town in the southernmost Indian state of Tamil Nadu and a municipality and administrative headquarters of Kanyakumari District. The city is situated close to the tip of the Indian peninsula, locked with the Western Ghats on all sides.[1][2] It was briefly part of the erstwhile Travancore state, till almost a decade after India's Independence from Britain in 1947. In 1956, it was merged with Tamil Nadu. In its earlier days, the town and its surroundings were known as Nanjilnadu. Nagercoil holds a number of educational institutions, hospitals, offices and industries. It is also the hub of industrial and commercial activity in the district, and a fertile agricultural area that produces paddy. The minerals ilmenite and monazite are mined there. The land is surrounded by hills and lush green paddy fields. It is also known for different varieties of bananas. Nagercoil is a land of great traditional and cultural significance.");

// // Adding multiple lines of text to
// // the document
// doc.text("According to 2011 census, Nagercoil had a population of 224,849 with a sex-ratio of 1,050 females for every 1,000 males, much above the national average of 929.[3][4] A total of 20,241 were under the age of six, constituting 10,119 males and 10,122 females. Scheduled Castes and Scheduled Tribes accounted for 4.19% and .17% of the population respectively. The average literacy of the city was 95.35%.[4] The city had a total of 59,997 households. There were a total of 76,345 workers, comprising 244 cultivators, 1,155 main agricultural laborers, 2,271 in household industries, 67,050 other workers, 5,625 marginal workers, 110 marginal cultivators, 361 marginal agricultural laborers, 447 marginal workers in household industries and 4,707 other marginal workers.[5]");
// doc.text("The largest concentration of the population of the town and the District is along the coastal belt, on the eastern side, while the largely forested areas on the western side of the district (along the Western Ghats) are sparsely populated");
// doc.text("As per the religious census of 2011, Nagercoil had 61.06% Hindus, 8.89% Muslims, 29.94% Christians, 0.01% Sikhs, 0.02% Buddhists, 0.02% Jains and 0.06% following other religions or not stating their position");


// // Ending the document
// doc.end();

// function generateOTP() {
//     return crypto.randomInt(100000, 999999).toString();
//   }

//   const otp = generateOTP();

//   const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });