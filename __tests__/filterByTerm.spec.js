function filterByTerm(inputArr, searchTerm) {
    const regex = new RegExp(searchTerm, "i");

    if (!searchTerm) {
        throw Error("What do you want to search for?");
    } else {

        return inputArr.filter(function (arrayElement) {
            return arrayElement.url.match(regex);
        });
    }
};

describe("Filter function", () => {  // method for containing 1 or + related tests
    test("it should filter by a search term (link)", () => {    // function to run actual test block
        const input = [                                             // actual test
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];

        // eslint-disable-next-line no-undef
        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
        // expect(filterByTerm(input, "")).toEqual(output);

    });
});




