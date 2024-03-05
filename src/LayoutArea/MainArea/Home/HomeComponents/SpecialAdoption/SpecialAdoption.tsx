import './SpecialAdoption.css'

function SpecialAdoption(): JSX.Element {

    function isweekend(): boolean {
        const now = new Date()
        const day = now.getDay() + 1
        return day >= 6
    }    
    
    function isTuesdayOrWednesday(): boolean {
        const now = new Date()
        const day = now.getDay() + 1
        return day === 3 || day === 6
    }

    return (
        <div className='SpecialAdoption Box'>
            <span>Special Adoption Of The Day:</span>
            {isweekend() ? <span>Aligetur </span>:<span>Wolf </span> }
            {isTuesdayOrWednesday() && <span>and a lepored</span> }
        </div>
    )
}
export default SpecialAdoption