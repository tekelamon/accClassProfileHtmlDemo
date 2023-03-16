import {data} from './students.js'

const section = document.querySelector('section')

data.forEach(student=>{    
    const {firstName,
         lastName,
        location,
        imagePath,html}=student
    const div = document.createElement('div')
    const a = document.createElement('a')
    const p = document.createElement('p')
    const img = document.createElement('img')
    a.href = 'davidLiang.html'
    a.textContent = "details"
    div.setAttribute('class','card')
    img.setAttribute('src',imagePath)
    img.setAttribute('alt',firstName+' photo')
    img.setAttribute('height',100)
    img.setAttribute('width',100)
    const h2 = document.createElement('h2')
    h2.textContent = `${firstName} ${lastName}`
    p.textContent = location
    div.append(a)
    div.append(h2)
    div.append(p)
    div.append(img)
    section.appendChild(div)
})

