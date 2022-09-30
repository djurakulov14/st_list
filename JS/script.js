let form = document.forms.datas
let block = document.querySelector('.data_box')
let datas = [
    {
        "id": 1,
        "name": 'Sardor',
        "year": 15,
        "actions":{
            "edit": "../img/edit.svg",
            "delete": "../img/delete.svg"
        }
    },
]


let year = (new Date()).getFullYear()
const reload = (arr) => {
    block.innerHTML = ''
    var count = 1
    for(let item of arr){
        let st_id = document.createElement('p')
        let st_name = document.createElement('p')
        let st_year = document.createElement('p')
        let remove = document.createElement('img')
        let edit = document.createElement('img')
        let img_block = document.createElement('div')
        let data_block = document.createElement('div')
        let name_inp = document.createElement('input')
        let name_age = document.createElement('input')
        let save = document.createElement('button')

        name_inp.type = 'text'
        name_age.type = 'number'
        name_inp.classList.add('edit_inp')
        name_age.classList.add('edit_age')
        data_block.classList.add('box_flex')
        save.classList.add('save_btn')
        save.innerHTML = 'save'

        img_block.append(remove, edit)
        data_block.append( st_id, st_name, st_year, img_block, name_inp, name_age, save)
        block.append(data_block)

        st_id.innerHTML = count
        st_name.innerHTML = item.name
        st_year.innerHTML = year - item.year


        st_name.classList.add('st_year')
        st_year.classList.add('st_year')

        remove.src = item.actions.delete
        edit.src = item.actions.edit        
        count++

        remove.onclick = () => {
            datas = datas.filter(e => e !== item)
            reload(datas)
        }

        edit.onclick = () => {
            name_inp.value = item.name
            name_age.value = item.year
            name_age.style.display = 'block'
            name_inp.style.display = 'block'
            save.style.display = 'block'
            st_name.style.opacity = '0'
            st_year.style.opacity = '0'

            setTimeout(() => {
                name_inp.style.opacity = '1'
                name_age.style.opacity = '1'
                save.style.opacity = '1'
                st_name.style.display = 'none'
                st_year.style.display = 'none'
            }, 200);
        }
        save.onclick = () => {
            if(name_inp.value !== '' && name_age.value !== ''){
                
                name_inp.style.opacity = '0'
                name_age.style.opacity = '0'
                save.style.opacity = '0'
                st_name.style.display = 'block'
                st_year.style.display = 'block'
                
                setTimeout(() => {
                    name_age.style.display = 'none'
                    name_inp.style.display = 'none'
                    save.style.display = 'none'
                    st_name.style.opacity = '1'
                    st_year.style.opacity = '1'
                }, 200);
                reload(datas)
            } else {
                alert("Заполните поле")
            }

        }

    }


}





form.onsubmit = (e) => {
    e.preventDefault()

    if(form.name.value !== "" && form.year.value !== ""){
        let task = {
            "id": Math.random(),
            "name": 'Sardor',
            "year": 15,
            "actions":{
                "edit": "../img/edit.svg",
                "delete": "../img/delete.svg"
            }
        }
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            task[key] = value
        })
    
    
        datas.push(task)
    
        reload(datas)
        form.name.value = ''
        form.year.value = ''
    } else {
        alert("Заполните поле")
    }

}

reload(datas)