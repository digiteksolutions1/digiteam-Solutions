import ServiceCard from '../components/Accounting/ServiceCard'
import SectionHeader from '../components/Accounting/Header'
import Hero from '../components/Accounting/Hero'

const accountingServices = [
    {
        title: "Accounting",
        description: "Who do We Help",
        icon: 'calculator',  // Represents general accounting
        features: [
            "Sole Traders",
            "Limited Companies",
            "Freelancers",
        ],
        cta: "Get Consultation"
    },
    {
        title: "Payroll",
        description: "Payroll Services for UK Businesses",
        icon: 'paycheck',  // Specifically for payroll
        features: [
            "HMRC Compliance",
            "Excellent Service",
            "Always on time",
        ],
        cta: "Get Consultation"
    },
    {
        title: "VAT Returns",
        description: "VAT Return Services for UK Businesses",
        icon: 'percentage',  // Representing tax percentages
        features: [
            "Legislation",
            "Deadlines",
            "Penalties",
        ],
        cta: "Get Consultation"
    },
    {
        title: "Bookkeeping",
        description: "Bookkeeping Services for UK Businesses",
        icon: 'ledger',  // Represents financial records
        features: [
            "Information sorted",
            "Transactions reconciled",
            "Digitally stored",
        ],
        cta: "Get Consultation"
    },
    {
        title: "Pension",
        description: "Pension Services for UK Businesses",
        icon: 'retirement',  // For pension services
        features: [
            "Accurate calculations",
            "HMRC Compliance",
            "Expert Advice",
        ],
        cta: "Get Consultation"
    },
    {
        title: "Self Assessment",
        description: "We got you covered from start to finish",
        icon: 'document',  // For tax documents
        features: [
            "Preparation",
            "Review",
            "Submission",
        ],
        cta: "Get Consultation"
    }
]

export default function AccountingServices() {
    return (
        <>
            <Hero />
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <SectionHeader
                        title="Professional Accounting Services"
                        subtitle="Precision financial management tailored to your business needs"
                        tagline="Financial Excellence"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {accountingServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                features={service.features}
                                cta={service.cta}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}