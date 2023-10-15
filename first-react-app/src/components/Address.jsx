function Address({ number = 1234, street ="Nocturne Road", city = "Strawberry", state = "CO", postcode = 80452, country = "USA" }) {
    return (
      <div className="Address componentBox">
        {" "}
        <strong>Spidey Address:</strong> <br/>
        {number} {street} <br/>
        {city}, {state} <br/>
        {postcode}, {country}
      </div>
    );
  }
  export default Address;