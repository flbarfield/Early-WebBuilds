Heavy Lesson!

Pretty much showed how .NET handles multiple classes. Each new class (basically a blue print of creating similar future tools) will have it's own file.
This is important because you basically want your main program the sum of a bunch of component classes. It also brings so much more order into your code.

Within you'll define the class's properties:

  	private string _City;
        private string _Country = "USA";
        private string _CustomerID;
        private string _CustomerName;
        private string _PostalCode;
        private string _Region;

Methods: 
	
public void DisplayID()
        {
            Console.WriteLine(this.CustomerID);
        }

DEFINE those methods for future fellow coders on your project:

	/// <summary>
        /// The customer's ID
        /// </summary>
	***METHOD HERE****

I was also taught the use of the value keyword.
It's an easy way to return a passed in value.
	
	public string City
        {
            get
            {
                return _City;
            }

            set
            {
                _City = value;
            }
        }

You can also access the "Class Diagram" to look at your classes.


