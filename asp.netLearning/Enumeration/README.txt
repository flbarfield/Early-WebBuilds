In this I learned how .net handles enumeration, structs, and constants

const works just like how it does in javascript, things defined as a const cannot change: const varName {}

enumeration is a collection of values ordered by number.

enum DaysofWeek {
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	etc...
} 

a struct is a user definied collection of values that can have things that aren't numbers.

struct Author {
	public string FirstName;
	public string LastName;
	public string Company;
	public string Title;
}

static void UsingStructs {
	Author author1;
	author1.FirstName = "Ken";
        author1.LastName = "Getz";
        author1.Title = "Sr.Consultant";
        author1.Company = "MCW Technologies";

        Author author2;
        author2.FirstName = "Ricky";
        author2.LastName = "Barfield";
        author2.Title = "Front End Web Application Developer";
        author2.Company = "E and W";
}