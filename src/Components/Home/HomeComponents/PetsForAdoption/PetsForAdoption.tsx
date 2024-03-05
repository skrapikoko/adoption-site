import './PetsForAdoption.css'

function PetsForAdoption(): JSX.Element {
    
    const pets = [
        {id: 1, name: "duck"},
        {id: 2, name: "dog"},
        {id: 3, name: "cat"},
        {id: 4, name: "bird"}
    ]

    return (
        <div className='petsforadoption Box'>
            {pets.map(pet => <span key={pet.id}>pet ID: {pet.id} pet name: {pet.name}</span>)}
        </div>
    )
}

export default PetsForAdoption