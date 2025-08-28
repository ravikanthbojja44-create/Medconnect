"use client"

import { useState } from "react"
import { Heart, Star, MapPin, Clock, Phone, Calendar, Trash2, Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function SavedPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("hospitals")

  const savedHospitals = [
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
      image: "/modern-hospital-exterior.png",
      savedDate: "2 days ago",
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
      image: "/clean-modern-clinic.png",
      savedDate: "1 week ago",
      emergency: false,
    },
  ]

  const savedDoctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      hospital: "City General Hospital",
      rating: 4.9,
      experience: "15 years",
      image: "/female-doctor.png",
      languages: ["English", "Spanish"],
      savedDate: "3 days ago",
      nextAvailable: "Tomorrow 2:00 PM",
    },
    {
      id: "6",
      name: "Dr. Amanda Foster",
      specialty: "Pediatric Emergency Medicine",
      hospital: "Metro Children's Hospital",
      rating: 4.9,
      experience: "12 years",
      image: "/female-pediatrician.png",
      languages: ["English", "Spanish", "Sign Language"],
      savedDate: "1 week ago",
      nextAvailable: "Today 4:30 PM",
    },
  ]

  const savedAppointments = [
    {
      id: "1",
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      hospital: "City General Hospital",
      date: "Dec 28, 2024",
      time: "2:00 PM",
      type: "Follow-up Consultation",
      status: "Confirmed",
      image: "/female-doctor.png",
    },
    {
      id: "2",
      doctorName: "Dr. Amanda Foster",
      specialty: "Pediatric Emergency",
      hospital: "Metro Children's Hospital",
      date: "Jan 5, 2025",
      time: "10:30 AM",
      type: "Regular Checkup",
      status: "Pending",
      image: "/female-pediatrician.png",
    },
  ]

  const filteredHospitals = savedHospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredDoctors = savedDoctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredAppointments = savedAppointments.filter(
    (appointment) =>
      appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.specialty.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const removeSavedItem = (type: string, id: string) => {
    // In a real app, this would update the backend
    console.log(`Removing ${type} with id: ${id}`)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <h1 className="text-xl font-bold mb-4">Saved Items</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search saved items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background text-foreground"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hospitals" className="text-sm">
              Hospitals ({savedHospitals.length})
            </TabsTrigger>
            <TabsTrigger value="doctors" className="text-sm">
              Doctors ({savedDoctors.length})
            </TabsTrigger>
            <TabsTrigger value="appointments" className="text-sm">
              Appointments ({savedAppointments.length})
            </TabsTrigger>
          </TabsList>

          {/* Hospitals Tab */}
          <TabsContent value="hospitals" className="space-y-4 mt-4">
            {filteredHospitals.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-2">No saved hospitals</h3>
                <p className="text-muted-foreground mb-4">Start saving hospitals you're interested in</p>
                <Link href="/search">
                  <Button>Browse Hospitals</Button>
                </Link>
              </div>
            ) : (
              filteredHospitals.map((hospital) => (
                <Card key={hospital.id} className="hover:shadow-md transition-shadow">
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
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 ml-2 text-red-500 hover:text-red-600"
                            onClick={() => removeSavedItem("hospital", hospital.id)}
                          >
                            <Trash2 className="h-4 w-4" />
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

                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
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
                          <span className="text-muted-foreground">Saved {hospital.savedDate}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                          <Link href={`/hospital/${hospital.id}`} className="flex-1">
                            <Button size="sm" className="w-full">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Doctors Tab */}
          <TabsContent value="doctors" className="space-y-4 mt-4">
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-2">No saved doctors</h3>
                <p className="text-muted-foreground mb-4">Save doctors you'd like to visit</p>
                <Link href="/search">
                  <Button>Find Doctors</Button>
                </Link>
              </div>
            ) : (
              filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{doctor.name}</h3>
                            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                            <p className="text-xs text-muted-foreground">{doctor.hospital}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 ml-2 text-red-500 hover:text-red-600"
                            onClick={() => removeSavedItem("doctor", doctor.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-accent fill-current mr-1" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{doctor.experience} experience</span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                          <span>Languages: {doctor.languages.join(", ")}</span>
                          <span>Saved {doctor.savedDate}</span>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-accent font-medium">
                            Next available: {doctor.nextAvailable}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <Link href={`/doctor/${doctor.id}`} className="flex-1">
                            <Button variant="outline" size="sm" className="w-full bg-transparent">
                              View Profile
                            </Button>
                          </Link>
                          <Link href={`/booking?doctor=${doctor.id}`} className="flex-1">
                            <Button size="sm" className="w-full">
                              <Calendar className="h-3 w-3 mr-1" />
                              Book Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4 mt-4">
            {filteredAppointments.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-2">No appointments</h3>
                <p className="text-muted-foreground mb-4">Book your first appointment</p>
                <Link href="/booking">
                  <Button>Book Appointment</Button>
                </Link>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <img
                        src={appointment.image || "/placeholder.svg"}
                        alt={appointment.doctorName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{appointment.doctorName}</h3>
                            <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                            <p className="text-xs text-muted-foreground">{appointment.hospital}</p>
                          </div>
                          <Badge
                            variant={appointment.status === "Confirmed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {appointment.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                          <div>
                            <p className="text-muted-foreground">Date & Time</p>
                            <p className="font-medium">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Type</p>
                            <p className="font-medium">{appointment.type}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            Cancel
                          </Button>
                          <Button size="sm" className="flex-1">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
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
            <MapPin className="w-6 h-6 mb-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Map</span>
          </Link>
          <Link href="/saved" className="flex flex-col items-center p-2">
            <Heart className="w-6 h-6 mb-1 text-primary fill-current" />
            <span className="text-xs text-primary font-medium">Saved</span>
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
