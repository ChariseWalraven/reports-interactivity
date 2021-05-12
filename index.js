(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const objectFilesLevelTable = document.querySelector('table[data-object-files-level]')
        const tBodies = objectFilesLevelTable.querySelectorAll('tbody')
        
        tBodies.forEach(tBody => {
            tBody.querySelectorAll('[class^="toggle-"]').forEach(toggle => {
                toggle.addEventListener('click', _ => toggleGroup(tBody))
            })
        
            const numErrors = tBody.querySelectorAll('tr').length
            tBody.querySelector('.error-count').innerText = `(${numErrors})`
        })
        
        console.log({ objectFilesLevelTable, tBodies })
        
        function toggleGroup(tBodyElement) {
            if (tBodyElement.classList.contains('collapsed')) {
                // if the group is hidden, show it
                console.log({ message: 'Showing group', tBodyElement })
                // show error group
                tBodyElement.classList.remove('collapsed');
                // hide 'show' toggle button
                tBodyElement.querySelector('.toggle-show').classList.add('hidden')
                // show 'hide' toggle button
                tBodyElement.querySelector('.toggle-hide').classList.remove('hidden')
            } else {
                // otherwise hide it
                console.log({ message: 'Hiding group', tBodyElement })
                // show error group
                tBodyElement.classList.add('collapsed');
                // hide 'show' toggle button
                tBodyElement.querySelector('.toggle-show').classList.remove('hidden')
                // show 'hide' toggle button
                tBodyElement.querySelector('.toggle-hide').classList.add('hidden')
            }
        }
    })
})()
