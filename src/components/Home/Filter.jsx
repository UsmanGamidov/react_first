<<<<<<< HEAD
import React from "react"

function Filter() {

    const [status, changeStatus] = React.useState('Popular');

    let filter__categoryes = ["Popular", "Novelty", "Featured", "Short films"]

=======
function Filter() {
>>>>>>> 0ee14841fae84ff62868b1f07f67d89e31107187
    return (
        <div className="filter">
            <div id="categoryes" className="filter__categoryes anchor">
                <div className="filter__categoryes-flex">
<<<<<<< HEAD
                    {filter__categoryes.map((categorye, index) => (
                        <div onClick={() => {changeStatus(categorye)}}
                        className={`filter__categoryes-item ${categorye === status ? 'active-category' : '' }`}
                        key={index}>
                            <p>{categorye}</p>
                            <span></span>
                        </div>
                    ))}

=======
                    <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item active-category">
                        <p>Popular</p>
                        <span></span>
                    </div>
                    <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                        <p>Novelty</p>
                        <span></span>
                    </div>
                    <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                        <p>Featured</p>
                        <span></span>
                    </div>
                    <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
                        <p>Short films</p>
                        <span></span>
                    </div>
>>>>>>> 0ee14841fae84ff62868b1f07f67d89e31107187
                </div>
                <span></span>
            </div>
            <div className="filter__buttons">
                 <button>Movies</button>
                 <button>Cinema</button>
                 <button>Adventure</button>
                 <button>Comedy</button>
                 <button>Fantasy</button>
                 <button>History</button>
                 <button>Cartoon</button>
                 <button>Detective</button>
                 <button>Mysticism</button>
                 <button>Drama</button>
            </div>
            <div className="filter__search">
                <input type="text" placeholder="Search..." />
                <button>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Filter