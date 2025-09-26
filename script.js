const word_meaning = (word) => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
        .then((response) => response.json())
        .then((data) => {
            main_word.innerHTML = ''
            pronounce.innerHTML = ''
            meaning.innerHTML = ''
            noun.innerHTML = ''
            verb.innerHTML = ''
            adjective.innerHTML = ''
            example.innerHTML = ''

            console.log(data)
            eee = data[0].word
            main_word.innerHTML = `<p ><i>Word: </i>${eee}</p>`
            if (data[0].phonetics[1]) {
                eee = data[0].phonetics[1].text
                pronounce.innerHTML = `<p ><i>Pronounce: </i>${eee}</p>`
            }
            if (data[0].meanings[0].definitions[0].definition) {
                eee = data[0].phonetic
                eee = data[0].meanings[0].definitions[0].definition
                meaning.innerHTML = `<p ><i>Meaning: </i><br>${eee}</p>`
            }
            if (data[0].meanings[1].definitions[0].definition) {
                eee = data[0].meanings[1].definitions[0].definition
                noun.innerHTML = `<p ><i>Verb: </i><br>${eee}</p>`

            }
            if (data[0].meanings[2].definitions[0].definition) {
                eee = data[0].meanings[2].definitions[0].definition
                verb.innerHTML = `<p ><i>Verb: </i><br>${eee}</p>`
            }
            if (data[0].meanings[3].definitions[0].definition) {
                eee = data[0].meanings[3].definitions[0].definition
                adjective.innerHTML = `<p><i>Adjective: </i><br>${eee}</p>`
            }




            
            // this is bad code for finding the example without using loops

            // if (data[0].meanings[3].definitions[0].definition) {
            //     eee = data[0].meanings[3].definitions[0].definition[4].example[0]
            // }
            
            // data[0].meanings.forEach(meaning => {
            //     meaning.definitions.forEach(def => {
            //         if (def.example) {
            //             exampleText = def.example; // store the first example found
            //             adjective.innerHTML = `<p><i>Adjective: </i><br>${exampleText}</p>`
            //         }
            //     });
            // });
            









            // voice.addEventListener('click',(e)=>{
            //     e.preventDefault()
            //     var audio = new Audio(`${data[0].phonetics[0].audio}`)
            //     audio.play()
            // })
        });
}
submit.addEventListener('click', (e) => {
    e.preventDefault()
    word_meaning(word.value)
    word.value = ''
})

word_meaning('dictionary')
