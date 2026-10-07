export interface Users{
    readonly id: number,
    email: string,
    passwordHash: string,
    role: string,
    fullName: string,
    phone: string,
    createdAt: Date
}

export interface Reviews{
    readonly id: number,
    userId?: number,
    flightId: number,
    rating: number,
    comment: string,
    createdAt: Date
}

export interface Flights{
    readonly id: number,
    flightNumber: string,
    departureAirportId: number,
    arrivalAirportId: number,
    airplaneId: number,
    departureTime: Date,
    status: string,
    basePrice: number
}

export interface Airports{
    readonly id: number,
    code: string,
    name: string,
    cityId: number
}

export interface Cities{
    readonly id: number,
    name: string,
    country: string
}

export interface Airplanes{
    readonly id: number,
    model: string,
    capacity: number
}

export interface Seats{
    readonly id: number,
    airplaneId: number,
    seatNumber: string,
    seatClass: string
}

export interface Payments{
    readonly id: number,
    bookingId: number,
    amount: number,
    method: string,
    status: string,
    cardLastFour: string,
    paidAt: Date
}

export interface Bookings{
    readonly id: number,
    userId: number,
    flightId: number,
    seatId: number,
    bookingCode: string,
    passengerName: string,
    passengerPassport: string,
    price: number,
    status: string,
    createdAt: Date
}

export interface TripPasses{
    readonly id: number,
    bookingId: number,
    gate: string,
    boardingTime: Date,
    issuedAt: Date
}