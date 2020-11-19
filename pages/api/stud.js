import stud from "../../data/stud";
// export default (req, res) => {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//       res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify(stud))
//
//   }
export default (req, res) => {
  res.json(JSON.stringify(stud))
}

