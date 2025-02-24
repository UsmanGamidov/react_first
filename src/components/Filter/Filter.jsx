import FilterButtons from "./FilterButtons";
import FilterCategoryes from "./FilterCategoryes";
import FilterSearh from "./FilterSearh";

function Filter() {


    return (
        <div className="filter">
            <FilterCategoryes />
            <FilterButtons />
            <FilterSearh />
        </div>
    )
}

export default Filter;