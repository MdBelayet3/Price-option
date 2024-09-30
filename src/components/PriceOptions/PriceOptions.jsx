import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym equipment",
                "Locker facilities",
                "Shower access",
                "Free fitness orientation",
                "24/7 access to the facility",
                "1 guest pass per month",
                "Discount on in-house smoothie bar"
            ],
            "price": 29.99
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym equipment",
                "Locker and towel service",
                "Group fitness classes (Yoga, Pilates, Zumba, Spin)",
                "Unlimited guest passes",
                "Access to sauna and steam room",
                "Free entry to monthly fitness challenges",
                "Priority booking for personal training sessions",
                "Dedicated support via app for tracking workouts"
            ],
            "price": 59.99
        },
        {
            "id": 3,
            "name": "Personal Training Package",
            "features": [
                "10 personal training sessions",
                "Customized workout plan",
                "Nutritional guidance",
                "Body composition analysis",
                "Access to private training area",
                "1-on-1 stretching sessions",
                "Weekly progress tracking with trainer",
                "Free workout gear (t-shirt, water bottle)"
            ],
            "price": 399.99
        },
        {
            "id": 4,
            "name": "Yoga and Wellness Package",
            "features": [
                "Unlimited yoga classes",
                "Meditation workshops",
                "Access to sauna and steam room",
                "Monthly wellness seminars",
                "Guided breathing and mindfulness sessions",
                "Free herbal tea after each class",
                "Access to aromatherapy rooms",
                "20% discount on wellness products"
            ],
            "price": 79.99
        },
        {
            "id": 5,
            "name": "Family Membership",
            "features": [
                "Access for up to 4 family members",
                "Kids fitness classes (Ages 6-12)",
                "Discounted personal training",
                "Family swim sessions",
                "Access to family-friendly fitness programs",
                "Free nutrition consultation for each member",
                "Priority booking for weekend family events",
                "Discount on birthday party bookings"
            ],
            "price": 89.99
        }
    ]

    return (
        <div>
            <h1 className="text-4xl my-3">Best Prices section</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    priceOptions.map(priceOption => <PriceOption option={priceOption} key={priceOption.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;