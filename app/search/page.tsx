"use client"

import { useState } from "react"
import { Search, MapPin, Star, Clock, Shield, ArrowLeft, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("distance")
  const [maxDistance, setMaxDistance] = useState([10])
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([])
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([])
  const [minRating, setMinRating] = useState([4.0])

  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      specialty: "Multi-specialty",
      rating: 4.8,
      distance: "0.8 km",
      hygiene: "A+",
      waitTime: "15 min",
      image: "/modern-hospital-exterior.png",
      address: "123 Medical Center Dr",
      phone: "+1 (555) 123-4567",
      insurance: ["Blue Cross", "Aetna", "Medicare"],
      languages: ["English", "Spanish", "French"],
      services: ["Emergency", "Surgery", "Cardiology", "Pediatrics"],
    },
    {
      id: 2,
      name: "MedCare Emergency Center",
      specialty: "Emergency Care",
      rating: 4.6,
      distance: "1.2 km",
      hygiene: "A",
      waitTime: "8 min",
      image: "/medical-center-ambulance.png",
      address: "456 Emergency Ave",
      phone: "+1 (555) 987-6543",
      insurance: ["United Health", "Cigna", "Medicare"],
      languages: ["English", "Spanish"],
      services: ["Emergency", "Urgent Care", "X-Ray"],
    },
    {
      id: 3,
      name: "Wellness Primary Care Clinic",
      specialty: "Primary Care",
      rating: 4.7,
      distance: "2.1 km",
      hygiene: "A+",
      waitTime: "25 min",
      image: "/clean-modern-clinic.png",
      address: "789 Health St",
      phone: "+1 (555) 456-7890",
      insurance: ["Blue Cross", "United Health", "Medicaid"],
      languages: ["English", "Hindi", "Mandarin"],
      services: ["Primary Care", "Preventive Care", "Lab Tests"],
    },
    {
      id: 4,
      name: "Heart & Vascular Institute",
      specialty: "Cardiology",
      rating: 4.9,
      distance: "3.5 km",
      hygiene: "A+",
      waitTime: "45 min",
      image: "/modern-hospital-exterior.png",
      address: "321 Cardiac Way",
      phone: "+1 (555) 234-5678",
      insurance: ["Blue Cross", "Aetna", "United Health"],
      languages: ["English", "Spanish", "German"],
      services: ["Cardiology", "Cardiac Surgery", "Vascular Surgery"],
    },
    {
      id: 5,
      name: "Children's Medical Center",
      specialty: "Pediatrics",
      rating: 4.8,
      distance: "4.2 km",
      hygiene: "A+",
      waitTime: "20 min",
      image: "/clean-modern-clinic.png",
      address: "654 Kids Health Blvd",
      phone: "+1 (555) 345-6789",
      insurance: ["Blue Cross", "Medicaid", "CHIP"],
      languages: ["English", "Spanish", "French"],
      services: ["Pediatrics", "Pediatric Surgery", "NICU"],
    },
  ]

  const specialties = ["Emergency", "Primary Care", "Cardiology", "Pediatrics", "Surgery", "Urgent Care"]
  const insuranceOptions = ["Blue Cross", "Aetna", "United Health", "Cigna", "Medicare", "Medicaid"]

  const handleSpecialtyToggle = (specialty: string) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty) ? prev.filter((s) => s !== specialty) : [...prev, specialty],
    )
  }

  const handleInsuranceToggle = (insurance: string) => {
    setSelectedInsurance((prev) =>
      prev.includes(insurance) ? prev.filter((i) => i !== insurance) : [...prev, insurance],
    )
  }

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.services.some((service) => service.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesSpecialty =
      selectedSpecialties.length === 0 || selectedSpecialties.some((specialty) => hospital.services.includes(specialty))

    const matchesInsurance =
      selectedInsurance.length === 0 || selectedInsurance.some((insurance) => hospital.insurance.includes(insurance))

    const matchesRating = hospital.rating >= minRating[0]

    const matchesDistance = Number.parseFloat(hospital.distance) <= maxDistance[0]

    return matchesSearch && matchesSpecialty && matchesInsurance && matchesRating && matchesDistance
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Find Healthcare</h1>
            <p className="text-sm text-muted-foreground">Search hospitals and clinics</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className={`rounded-full ${showFilters ? "bg-primary text-primary-foreground" : ""}`}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, specialty, or service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background border-border focus:ring-ring"
          />
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="waitTime">Wait Time</SelectItem>
              <SelectItem value="hygiene">Hygiene</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-card border-b border-border px-4 py-4">
          <div className="space-y-4">
            {/* Distance Filter */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Max Distance: {maxDistance[0]} km</Label>
              <Slider
                value={maxDistance}
                onValueChange={setMaxDistance}
                max={20}
                min={1}
                step={0.5}
                className="w-full"
              />
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Min Rating: {minRating[0]}</Label>
              <Slider value={minRating} onValueChange={setMinRating} max={5} min={1} step={0.1} className="w-full" />
            </div>

            {/* Specialty Filter */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Specialties</Label>
              <div className="grid grid-cols-2 gap-2">
                {specialties.map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox
                      id={specialty}
                      checked={selectedSpecialties.includes(specialty)}
                      onCheckedChange={() => handleSpecialtyToggle(specialty)}
                    />
                    <Label htmlFor={specialty} className="text-sm">
                      {specialty}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance Filter */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Insurance Accepted</Label>
              <div className="grid grid-cols-2 gap-2">
                {insuranceOptions.map((insurance) => (
                  <div key={insurance} className="flex items-center space-x-2">
                    <Checkbox
                      id={insurance}
                      checked={selectedInsurance.includes(insurance)}
                      onCheckedChange={() => handleInsuranceToggle(insurance)}
                    />
                    <Label htmlFor={insurance} className="text-sm">
                      {insurance}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedSpecialties([])
                  setSelectedInsurance([])
                  setMaxDistance([10])
                  setMinRating([4.0])
                }}
                className="flex-1"
              >
                Clear All
              </Button>
              <Button onClick={() => setShowFilters(false)} className="flex-1 bg-primary hover:bg-primary/90">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">{filteredHospitals.length} results found</p>
          <Button variant="ghost" size="sm" className="text-primary">
            <MapPin className="h-4 w-4 mr-1" />
            Map View
          </Button>
        </div>

        <div className="space-y-4">
          {filteredHospitals.map((hospital) => (
            <Link key={hospital.id} href={`/hospital/${hospital.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="flex">
                    <img
                      src={hospital.image || "/placeholder.svg"}
                      alt={hospital.name}
                      className="w-24 h-24 object-cover rounded-l-lg"
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-base">{hospital.name}</h3>
                          <p className="text-sm text-muted-foreground">{hospital.specialty}</p>
                          <p className="text-xs text-muted-foreground mt-1">{hospital.address}</p>
                        </div>
                        <div className="flex items-center ml-2">
                          <Star className="h-4 w-4 text-accent fill-current mr-1" />
                          <span className="text-sm font-medium text-foreground">{hospital.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            {hospital.hygiene}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {hospital.distance}
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {hospital.waitTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        {hospital.services.slice(0, 3).map((service) => (
                          <Badge key={service} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {hospital.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{hospital.services.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Languages: {hospital.languages.slice(0, 2).join(", ")}</span>
                          {hospital.languages.length > 2 && <span> +{hospital.languages.length - 2}</span>}
                        </div>
                        <Button size="sm" className="h-7 text-xs bg-primary hover:bg-primary/90">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedSpecialties([])
                setSelectedInsurance([])
                setMaxDistance([10])
                setMinRating([4.0])
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
