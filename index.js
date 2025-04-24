const  { createClient } = require ('@supabase/supabase-js')


const supabase = createClient('https://vjdussiriyrxoxsjhzsd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZHVzc2lyaXlyeG94c2poenNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NTk3MTEsImV4cCI6MjA0ODAzNTcxMX0.b6p5OaqaXBrMhebhSBFlwpZG5kFqhpLGwQQu4AFxZ00')




const express = require('express')
const app = express()
const port = 3000

app.get('/adress', async (req, res) => {
  const { data, error } = await supabase
  .from('adress')
  .select()
  res.send(data)
})

app.listen(port, ()=> {
  console.log('Example app istening on port ${port}')
})