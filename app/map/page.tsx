"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Star, Clock, Navigation, Phone, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function MapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null)

  const hospitals = [
    {
      id: "1",
      name: "City General Hospital",
      specialty: "Multi-specialty Medical Center",
      rating: 4.8,
      distance: "0.8 km",
      waitTime: "15 min",
      hygiene: "A+",
      address: "123 Medical Center Drive",
      phone: "+1 (555) 123-4567",
      coordinates: { lat: 40.7589, lng: -73.9851 },
      image: "/modern-hospital-exterior.png",
      emergency: true,
    },
    {
      id: "2",
      name: "St. Mary's Medical Center",
      specialty: "Cardiac & Surgical Excellence",
      rating: 4.7,
      distance: "1.2 km",
      waitTime: "25 min",
      hygiene: "A",
      address: "456 Healthcare Boulevard",
      phone: "+1 (555) 234-5678",
      coordinates: { lat: 40.7505, lng: -73.9934 },
      image: "/medical-center-ambulance.png",
      emergency: true,
    },
    {
      id: "3",
      name: "Metro Children's Hospital",
      specialty: "Pediatric Care & Family Medicine",
      rating: 4.9,
      distance: "2.1 km",
      waitTime: "10 min",
      hygiene: "A+",
      address: "789 Children's Way",
      phone: "+1 (555) 345-6789",
      coordinates: { lat: 40.7614, lng: -73.9776 },
      image: "/clean-modern-clinic.png",
      emergency: false,
    },
    {
      id: "4",
      name: "Downtown Urgent Care",
      specialty: "Urgent Care & Walk-in Clinic",
      rating: 4.5,
      distance: "0.5 km",
      waitTime: "5 min",
      hygiene: "A",
      address: "321 Quick Care Street",
      phone: "+1 (555) 456-7890",
      coordinates: { lat: 40.758, lng: -73.9855 },
      image: "/clean-modern-clinic.png",
      emergency: false,
    },
  ]

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <h1 className="text-xl font-bold mb-4">Healthcare Map</h1>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search hospitals, clinics, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background text-foreground"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="secondary" size="sm" className="whitespace-nowrap">
            <Filter className="h-3 w-3 mr-1" />
            All
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="whitespace-nowrap bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Emergency
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="whitespace-nowrap bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Nearby
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="whitespace-nowrap bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Pediatric
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="whitespace-nowrap bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Cardiac
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 border-b">
        {/* Mock Map Interface */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Interactive Map View</p>
            <p className="text-xs text-muted-foreground">Showing {filteredHospitals.length} healthcare facilities</p>
          </div>
        </div>

        {/* Map Pins */}
        {filteredHospitals.map((hospital, index) => (
          <div
            key={hospital.id}
            className={`absolute w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              selectedHospital === hospital.id
                ? "bg-accent text-accent-foreground scale-125 z-10"
                : hospital.emergency
                  ? "bg-red-500 text-white hover:scale-110"
                  : "bg-primary text-primary-foreground hover:scale-110"
            }`}
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 20}%`,
            }}
            onClick={() => setSelectedHospital(selectedHospital === hospital.id ? null : hospital.id)}
          >
            <MapPin className="h-4 w-4" />
          </div>
        ))}

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="w-8 h-8">
            <span className="text-lg font-bold">+</span>
          </Button>
          <Button size="icon" variant="secondary" className="w-8 h-8">
            <span className="text-lg font-bold">-</span>
          </Button>
        </div>

        {/* Current Location Button */}
        <div className="absolute bottom-4 right-4">
          <Button size="icon" variant="secondary" className="rounded-full">
            <Navigation className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hospital List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Nearby Healthcare ({filteredHospitals.length})</h2>
          <Button variant="outline" size="sm">
            <Filter className="h-3 w-3 mr-1" />
            Filter
          </Button>
        </div>

        <div className="space-y-3">
          {filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedHospital === hospital.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedHospital(selectedHospital === hospital.id ? null : hospital.id)}
            >
              <CardContent className="p-4">
                <div className="flex space-x-3">
                  <img
                    src={hospital.image || "/placeholder.svg"}
                    alt={hospital.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground truncate">{hospital.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">{hospital.specialty}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-accent fill-current mr-1" />
                        <span className="text-sm font-medium">{hospital.rating}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        {hospital.hygiene}
                      </Badge>
                      {hospital.emergency && (
                        <Badge variant="destructive" className="text-xs">
                          Emergency
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {hospital.distance}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {hospital.waitTime}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                          <Phone className="h-3 w-3 mr-1" />
                          Call
                        </Button>
                        <Link href={`/hospital/${hospital.id}`}>
                          <Button size="sm" className="h-7 text-xs">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedHospital === hospital.id && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-muted-foreground">Address</p>
                        <p className="font-medium">{hospital.address}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{hospital.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1">
                        <Navigation className="h-3 w-3 mr-1" />
                        Directions
                      </Button>
                      <Link href={`/booking?hospital=${hospital.id}`} className="flex-1">
                        <Button size="sm" variant="outline" className="w-full bg-transparent">
                          Book Appointment
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
        <div className="flex items-center justify-around py-2">
          <Link href="/" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1 flex items-center justify-center">
              <div className="w-4 h-4 bg-muted-foreground rounded"></div>
            </div>
            <span className="text-xs text-muted-foreground">Home</span>
          </Link>
          <Link href="/map" className="flex flex-col items-center p-2">
            <MapPin className="w-6 h-6 mb-1 text-primary" />
            <span className="text-xs text-primary font-medium">Map</span>
          </Link>
          <Link href="/saved" className="flex flex-col items-center p-2">
            <Heart className="w-6 h-6 mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Saved</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center p-2">
            <div className="w-6 h-6 mb-1 bg-muted-foreground rounded-full"></div>
            <span className="text-xs text-muted-foreground">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
