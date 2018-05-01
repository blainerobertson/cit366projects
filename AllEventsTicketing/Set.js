function Set() {

    /* ****************************************************
     * Opposite of symmetricDifference
     * Only items that are common between listA and listB
     * *************************************************** */
    this.intersection = function (listA, listB) {

        // Checks for invalid inputs, returns null if true
        if (listA === null || listB === null) {
            return null;
        }

        // Process lists if not null
        var resultList = [];

        for (var i = 0, x = listA.length; i < x; i++) {
            var nextValue = listA[i];

            // Each item in list b
            for (var ii = 0, xx = listB.length; ii < xx; ii++) {
                // checks if element in listB is same as element in listA
                if (listB[ii] === nextValue) {
                    // If matching, add to the resultList array
                    resultList.push(listB[ii]);
                    break;
                }
            } // ends inner loop - working with listB
        } // ends outer loop - working with listA
        return resultList;
    }

    /* ****************************************************
     * List items in listA and listB, but delete duplicates
     * *************************************************** */
    this.union = function (listA, listB) {

        // Checks for invalid inputs, returns null if true
        if (listA === null || listB === null) {
            return null;
        }
        // Process lists if not null
        var resultList = listA;
        for (var i = 0, x = listB.length; i < x; i++) {
            // checks if element in listB is not found in listA
            if (!resultList.includes(listB[i])) {
                resultList.push(listB[i]);
            }
        } // ends listB loop

        return resultList;
    }

    /* ****************************************************
     * Only items in listA are retained if they do not exist in listB
     * *************************************************** */
    this.relativeComplement = function (listA, listB) {

        // Checks for invalid inputs, returns null if true
        if (listA === null || listB === null) {
            return null;
        }

        // Process lists if not null
        var resultList = [];
        // Combine the arrays into one
        var combinedArray = listA.concat(listB);
        console.log(combinedArray);

        for (var i = 0, x = combinedArray.length; i < x; i++) {
            // if combinedArray element is NOT in listB add it to resultList
            if (!listB.includes(combinedArray[i])) {
                resultList.push(combinedArray[i]);
            }
        }

        return resultList;
    }

    /* ****************************************************
     * Opposite of Intersection
     * Only items in listA and listB if they are not shared
     * *************************************************** */
    this.symmetricDifference = function (listA, listB) {

        // Checks for invalid inputs, returns null if true
        if (listA === null || listB === null) {
            return null;
        }

        // Process lists if not null
        var resultList = [];

        // Combine the arrays into one
        var combinedArray = listA.concat(listB);
        console.log(combinedArray);

        // Find the intersecting values
        var intersectArray = this.intersection(listA, listB);
        console.log(intersectArray);

        for (var a = 0, n = combinedArray.length; a < n; a++) {
            // if combinedArray element is not part of intersectArray add to resultList
            if (!intersectArray.includes(combinedArray[a])) {
                resultList.push(combinedArray[a]);
            }
        }

        return resultList;
    }


}
