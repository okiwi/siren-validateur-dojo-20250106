class siren_validator {
    validate_length (siren) {
        return siren.toString().length == 9
    }

    extract_ranks(siren){

        const odds = [];
        const evens = [];

        siren
            .toString()
            .split("")
            .reverse()
            .forEach((c,i) =>{
                if(i%2 ===1) evens.push(parseInt(c)); else odds.push(parseInt(c))
            })
        return {odds, evens};
    }

    multiple_by_two_and_reduce(numbers) {
        return numbers.map(n => {
             const times2 = n * 2
             const times2str = times2.toString()
             if(times2str.length === 2) {
                return parseInt(times2str[0]) + parseInt(times2str[1])
             } else {
                return times2
             }
        });
    }

    verify_siren(siren){
        const {odds, evens} = this.extract_ranks(siren);
        const computedEvens = this.multiple_by_two_and_reduce(evens);
        const sumOfAll = computedEvens.reduce((acc, digit) => acc + digit) + odds.reduce((acc, digit) => acc + digit);
        return sumOfAll % 10 === 0;
    }
}



module.exports = siren_validator;