import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {

    const gymMemberships = [
        {
          "id": 1,
          "name": "Basic",
          "price": 30,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "One complimentary fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 50,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Two complimentary fitness assessments",
            "Access to group fitness classes"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 70,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Monthly fitness assessments",
            "Access to group fitness classes",
            "Access to sauna and steam room",
            "One free personal training session per month"
          ]
        }      
      ]
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-center my-4">Best Price in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-center">
            {
                gymMemberships.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;