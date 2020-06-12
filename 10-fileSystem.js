const fs = require('fs')

// fs.unlink('./test/hello', err=>{
//     if(err) throw err
//     console.log('successfully deleted!')
// })

// fs.rename('./test/hello', './test/world', err=>{
//     if(err) throw err
//     console.log('renamed complete!')
// })

// fs.stat('./test/world', (err, stats)=>{
//     if(err) throw err
//     console.log(`stats: ${JSON.stringify(stats)}`)
// })

fs.rename('./test/hello', './test/world', err=>{
    if(err) throw err
    fs.stat('./test/world', (err, stats)=>{
        if(err) throw err
        console.log(`stats: ${JSON.stringify(stats)}`)
    })
})

