"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Clock,
  Shield,
  Heart,
  Calendar,
  Navigation,
  Share2,
  MessageCircle,
  Award,
  CreditCard,
  Languages,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function HospitalDetailPage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false)
  const [selectedTab, setSelectedTab] = useState("overview")

  const hospitalData = {
    "1": {
      id: "1",
      name: "City General Hospital",
      specialty: "Multi-specialty Medical Center",
      rating: 4.8,
      totalReviews: 1247,
      distance: "0.8 km",
      hygiene: "A+",
      waitTime: "15 min",
      address: "123 Medical Center Drive, Downtown District",
      phone: "+1 (555) 123-4567",
      website: "www.citygeneralhospital.com",
      image: "/modern-hospital-exterior.png",
      images: ["/modern-hospital-exterior.png", "/medical-center-ambulance.png", "/clean-modern-clinic.png"],
      insurance: ["Blue Cross Blue Shield", "Aetna", "Medicare", "Medicaid", "United Healthcare", "Cigna"],
      languages: ["English", "Spanish", "French", "Hindi", "Mandarin", "Arabic"],
      services: [
        "Emergency Care",
        "Surgery",
        "Cardiology",
        "Pediatrics",
        "Oncology",
        "Orthopedics",
        "Neurology",
        "Radiology",
      ],
      amenities: ["Free WiFi", "Parking Available", "Wheelchair Accessible", "Cafeteria", "Pharmacy", "ATM", "Chapel"],
      hours: {
        emergency: "24/7",
        general: "Mon-Fri: 6:00 AM - 10:00 PM, Sat-Sun: 8:00 AM - 8:00 PM",
      },
      certifications: ["Joint Commission Accredited", "Magnet Hospital", "Level 1 Trauma Center"],
      description:
        "City General Hospital is a leading multi-specialty medical center providing comprehensive healthcare services to the community for over 50 years. Our state-of-the-art facilities and experienced medical professionals ensure the highest quality of care.",
      doctors: [
        {
          id: 1,
          name: "Dr. Sarah Johnson",
          specialty: "Cardiology",
          rating: 4.9,
          experience: "15 years",
          image: "/female-doctor.png",
          languages: ["English", "Spanish"],
          education: "Harvard Medical School",
          certifications: ["Board Certified Cardiologist", "Fellow of American College of Cardiology"],
        },
        {
          id: 2,
          name: "Dr. Michael Chen",
          specialty: "Emergency Medicine",
          rating: 4.8,
          experience: "12 years",
          image: "/male-doctor.png",
          languages: ["English", "Mandarin"],
          education: "Johns Hopkins University",
          certifications: ["Board Certified Emergency Medicine", "ACLS Certified"],
        },
        {
          id: 3,
          name: "Dr. Emily Rodriguez",
          specialty: "Pediatrics",
          rating: 4.9,
          experience: "10 years",
          image: "/female-pediatrician.png",
          languages: ["English", "Spanish"],
          education: "Stanford Medical School",
          certifications: ["Board Certified Pediatrician", "Pediatric Advanced Life Support"],
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Jennifer M.",
          rating: 5,
          date: "2 days ago",
          comment:
            "Excellent care and very professional staff. The emergency department was efficient and the doctors were thorough.",
          helpful: 12,
        },
        {
          id: 2,
          author: "Robert K.",
          rating: 4,
          date: "1 week ago",
          comment: "Good facilities and clean environment. Wait time was reasonable. Would recommend for routine care.",
          helpful: 8,
        },
        {
          id: 3,
          author: "Maria S.",
          rating: 5,
          date: "2 weeks ago",
          comment:
            "Dr. Johnson is amazing! She explained everything clearly and the treatment was successful. Great hospital overall.",
          helpful: 15,
        },
      ],
    },
    "2": {
      id: "2",
      name: "St. Mary's Medical Center",
      specialty: "Cardiac & Surgical Excellence",
      rating: 4.7,
      totalReviews: 892,
      distance: "1.2 km",
      hygiene: "A",
      waitTime: "25 min",
      address: "456 Healthcare Boulevard, Medical District",
      phone: "+1 (555) 234-5678",
      website: "www.stmarysmedical.com",
      image: "/medical-center-ambulance.png",
      images: ["/medical-center-ambulance.png", "/modern-hospital-exterior.png", "/clean-modern-clinic.png"],
      insurance: ["Aetna", "Blue Cross Blue Shield", "Humana", "Medicare", "Medicaid"],
      languages: ["English", "Spanish", "Italian", "Portuguese"],
      services: [
        "Cardiac Surgery",
        "Emergency Care",
        "Orthopedic Surgery",
        "Maternity Care",
        "Intensive Care",
        "Rehabilitation",
      ],
      amenities: ["Valet Parking", "Gift Shop", "Free WiFi", "Wheelchair Accessible", "Cafeteria", "Chapel"],
      hours: {
        emergency: "24/7",
        general: "Mon-Sun: 7:00 AM - 9:00 PM",
      },
      certifications: ["Joint Commission Accredited", "American Heart Association Recognition", "Magnet Hospital"],
      description:
        "St. Mary's Medical Center specializes in cardiac care and surgical excellence, serving the community with compassionate healthcare for over 40 years.",
      doctors: [
        {
          id: 4,
          name: "Dr. James Wilson",
          specialty: "Cardiac Surgery",
          rating: 4.9,
          experience: "20 years",
          image: "/male-doctor.png",
          languages: ["English", "Spanish"],
          education: "Mayo Clinic",
          certifications: ["Board Certified Cardiac Surgeon", "Fellow of American College of Surgeons"],
        },
        {
          id: 5,
          name: "Dr. Lisa Thompson",
          specialty: "Orthopedic Surgery",
          rating: 4.8,
          experience: "14 years",
          image: "/female-doctor.png",
          languages: ["English", "Italian"],
          education: "Cleveland Clinic",
          certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine Specialist"],
        },
      ],
      reviews: [
        {
          id: 1,
          author: "David L.",
          rating: 5,
          date: "1 day ago",
          comment:
            "Outstanding cardiac care. Dr. Wilson saved my life with his expertise and the staff was incredible.",
          helpful: 18,
        },
        {
          id: 2,
          author: "Anna P.",
          rating: 4,
          date: "5 days ago",
          comment: "Great orthopedic department. Dr. Thompson was very knowledgeable and caring.",
          helpful: 9,
        },
      ],
    },
    "3": {
      id: "3",
      name: "Metro Children's Hospital",
      specialty: "Pediatric Care & Family Medicine",
      rating: 4.9,
      totalReviews: 654,
      distance: "2.1 km",
      hygiene: "A+",
      waitTime: "10 min",
      address: "789 Children's Way, Family District",
      phone: "+1 (555) 345-6789",
      website: "www.metrochildrens.com",
      image: "/clean-modern-clinic.png",
      images: ["/clean-modern-clinic.png", "/modern-hospital-exterior.png", "/medical-center-ambulance.png"],
      insurance: ["All Major Insurance", "Medicaid", "CHIP", "Blue Cross Blue Shield"],
      languages: ["English", "Spanish", "French", "Sign Language"],
      services: [
        "Pediatric Emergency",
        "Neonatal Care",
        "Pediatric Surgery",
        "Child Psychology",
        "Vaccination Services",
        "Family Medicine",
      ],
      amenities: ["Play Areas", "Family Rooms", "Free WiFi", "Parking", "Cafeteria", "Lactation Support"],
      hours: {
        emergency: "24/7",
        general: "Mon-Fri: 7:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 6:00 PM",
      },
      certifications: ["Pediatric Specialty Recognition", "Baby-Friendly Hospital", "Joint Commission Accredited"],
      description:
        "Metro Children's Hospital is dedicated exclusively to pediatric care, providing specialized medical services for infants, children, and adolescents in a child-friendly environment.",
      doctors: [
        {
          id: 6,
          name: "Dr. Amanda Foster",
          specialty: "Pediatric Emergency Medicine",
          rating: 4.9,
          experience: "12 years",
          image: "/female-pediatrician.png",
          languages: ["English", "Spanish", "Sign Language"],
          education: "Children's Hospital of Philadelphia",
          certifications: ["Board Certified Pediatric Emergency Medicine", "PALS Certified"],
        },
        {
          id: 7,
          name: "Dr. Robert Kim",
          specialty: "Neonatology",
          rating: 4.8,
          experience: "16 years",
          image: "/male-doctor.png",
          languages: ["English", "Korean"],
          education: "Boston Children's Hospital",
          certifications: ["Board Certified Neonatologist", "NRP Instructor"],
        },
      ],
      reviews: [
        {
          id: 1,
          author: "Sarah M.",
          rating: 5,
          date: "3 days ago",
          comment: "Amazing with children! Dr. Foster made my daughter feel comfortable during a scary time.",
          helpful: 22,
        },
        {
          id: 2,
          author: "Mike R.",
          rating: 5,
          date: "1 week ago",
          comment: "Best pediatric care in the city. The staff truly understands how to work with kids.",
          helpful: 16,
        },
      ],
    },
  }

  const hospital = hospitalData[params.id as keyof typeof hospitalData] || hospitalData["1"]

  const ratingBreakdown = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 22 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ]

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with Image */}
      <div className="relative">
        <img src={hospital.image || "/placeholder.svg"} alt={hospital.name} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Link href="/search">
            <Button variant="secondary" size="icon" className="rounded-full bg-white/90 hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-white/90 hover:bg-white"
              onClick={() => setIsSaved(!isSaved)}
            >
              <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hospital Info */}
      <div className="px-4 py-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground mb-1">{hospital.name}</h1>
            <p className="text-sm text-muted-foreground mb-2">{hospital.specialty}</p>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent fill-current mr-1" />
                <span className="font-medium text-foreground">{hospital.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({hospital.totalReviews} reviews)</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                <Shield className="h-3 w-3 mr-1" />
                {hospital.hygiene}
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <Card className="text-center">
            <CardContent className="p-3">
              <MapPin className="h-4 w-4 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Distance</p>
              <p className="text-sm font-medium">{hospital.distance}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <Clock className="h-4 w-4 text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Wait Time</p>
              <p className="text-sm font-medium">{hospital.waitTime}</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-3">
              <Phone className="h-4 w-4 text-secondary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Emergency</p>
              <p className="text-sm font-medium">24/7</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link href="/booking">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </Link>
          <Button variant="outline">
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="text-xs">
              Overview
            </TabsTrigger>
            <TabsTrigger value="doctors" className="text-xs">
              Doctors
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs">
              Reviews
            </TabsTrigger>
            <TabsTrigger value="info" className="text-xs">
              Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4 mt-4">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hospital.description}</p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hospital.services.map((service) => (
                    <Badge key={service} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Award className="h-4 w-4 mr-2 text-accent" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hospital.certifications.map((cert) => (
                    <div key={cert} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="doctors" className="space-y-4 mt-4">
            {hospital.doctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctor/${doctor.id}`}>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="font-medium text-foreground">{doctor.name}</h3>
                            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-accent fill-current mr-1" />
                            <span className="text-sm font-medium">{doctor.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span>{doctor.experience} experience</span>
                          <span>Languages: {doctor.languages.join(", ")}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {doctor.certifications.slice(0, 2).map((cert) => (
                            <Badge key={cert} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4 mt-4">
            {/* Rating Summary */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-2xl font-bold mr-2">{hospital.rating}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(hospital.rating) ? "text-accent fill-current" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{hospital.totalReviews} reviews</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Write Review
                  </Button>
                </div>

                <div className="space-y-2">
                  {ratingBreakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-6">{item.stars}</span>
                      <Star className="h-3 w-3 text-accent fill-current" />
                      <Progress value={item.percentage} className="flex-1 h-2" />
                      <span className="text-sm text-muted-foreground w-8">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            {hospital.reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-sm">{review.author}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-3 w-3 ${star <= review.rating ? "text-accent fill-current" : "text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{review.helpful} people found this helpful</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="info" className="space-y-4 mt-4">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-3" />
                  <span className="text-sm">{hospital.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                  <span className="text-sm">{hospital.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Emergency</span>
                  <span className="text-sm font-medium text-accent">{hospital.hours.emergency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">General Services</span>
                  <span className="text-sm">{hospital.hours.general}</span>
                </div>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Insurance Accepted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hospital.insurance.map((insurance) => (
                    <Badge key={insurance} variant="outline" className="text-xs">
                      {insurance}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <Languages className="h-4 w-4 mr-2" />
                  Languages Spoken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {hospital.languages.map((language) => (
                    <Badge key={language} variant="outline" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {hospital.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
