function FunctionParanthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;

    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <div>
            <h3>Function Paranthesis And Parameters</h3>
            twoSquared = {twoSquared}<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = {threePlusOne}<br/>
            plusOne(3) = {plusOne(3)}<br/>
        </div>
    );
}

export default FunctionParanthesisAndParameters;