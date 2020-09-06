
const getLast = async() => {
        
    const apiKey = 'aaa2f9b9a16a6d558f78a27bb2921f42';
    const resp = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=${apiKey}&format=json`);
    const {artists} = await resp.json();

    console.log(artists);

    const table = document.querySelector("table");

    let tabla = `<TR>
                <td> <B> Artistas </B> </td>
                <td> <B> Reproducciones </B> </td>
                <td> <B> Oyentes </B> </td>
            </TR>`
    
    artists.artist.forEach(element => {
                tabla += `
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.playcount}</td>
                        <td>${element.listeners}</td>
                    </tr>`
    table.innerHTML = tabla;
    });
}

getLast();