// Global State Variables
const properties = [
    // 1. Light Cosmetic Fix (Mid ARV, Low Rehab)
    {
        id: 1,
        address: "123 Main Street",
        beds: 3, baths: 2, sqFt: 1500,
        condition: "Good structure. Needs paint, new carpet, and updated fixtures.",
        trueARV: 300000, trueRepairs: 30000, 
        // MAO = (ARV * 0.90) - (Repairs * 2) - $10,000 fee
        trueMAO: Math.round((0.90 * 300000) - (2 * 30000) - 10000), // $200,000
        comps: [
            { id: 'A', price: 310000, date: '1 month ago', condition: 'Perfect match, recently flipped.', isGood: true },
            { id: 'B', price: 350000, date: '2 weeks ago', condition: 'Larger lot (ignore).', isGood: false },
            { id: 'C', price: 280000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'D', price: 305000, date: '1 week ago', condition: 'Solid ARV indicator.', isGood: true },
            { id: 'E', price: 200000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 250000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 2. Full Kitchen/Bath Remodel (Mid ARV, Mid Rehab)
    {
        id: 2,
        address: "45 Oak Lane",
        beds: 4, baths: 2, sqFt: 2100,
        condition: "Needs full kitchen and two bathroom remodels. New roof required (approx $15k).",
        trueARV: 450000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 450000) - (2 * 60000) - 10000), // $275,000
        comps: [
            { id: 'A', price: 445000, date: '2 weeks ago', condition: 'Similar size, perfect comp.', isGood: true },
            { id: 'B', price: 500000, date: '1 month ago', condition: 'Includes pool (subject does not).', isGood: false },
            { id: 'C', price: 460000, date: '1 week ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'D', price: 430000, date: '3 months ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'E', price: 300000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 350000, date: '6 months ago', condition: 'Sold As-Is.', isGood: false }
        ]
    },
    // 3. Heavy Structural/Gut (Low ARV, Very High Rehab)
    {
        id: 3,
        address: "99 Disaster Close",
        beds: 2, baths: 1, sqFt: 900,
        condition: "Total gut. Foundation, electrical, plumbing, and roof all need replacement. Very costly.",
        trueARV: 150000, trueRepairs: 75000, 
        trueMAO: Math.round((0.90 * 150000) - (2 * 75000) - 10000), // -$10,000 (Loss Deal - Very High Risk)
        comps: [
            { id: 'A', price: 160000, date: '1 week ago', condition: 'Highest comp for renovated small home.', isGood: true },
            { id: 'B', price: 145000, date: '2 months ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'C', price: 120000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'D', price: 200000, date: '6 months ago', condition: 'Large 3 bed home (ignore).', isGood: false },
            { id: 'E', price: 80000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 50000, date: '1 month ago', condition: 'Vacant land sale.', isGood: false } 
        ]
    },
    // 4. Premium Area, Light Cosmetic (High ARV, Low Rehab)
    {
        id: 4,
        address: "10 Luxury Heights",
        beds: 5, baths: 4, sqFt: 3500,
        condition: "Excellent condition. Needs minor high-end paint, trim, and landscaping to maximize profit.",
        trueARV: 850000, trueRepairs: 40000, 
        trueMAO: Math.round((0.90 * 850000) - (2 * 40000) - 10000), // $675,000
        comps: [
            { id: 'A', price: 840000, date: '1 month ago', condition: 'Similar size, perfect comp.', isGood: true },
            { id: 'B', price: 950000, date: '2 weeks ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'C', price: 860000, date: '1 week ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'D', price: 830000, date: '3 months ago', condition: 'Good ARV indicator.', isGood: true },
            { id: 'E', price: 650000, date: '6 months ago', condition: 'Sold by motivated seller.', isGood: false },
            { id: 'F', price: 700000, date: '1 year ago', condition: 'Sale too old.', isGood: false } 
        ]
    },
    // 5. Fire Damage, Mid-Range (Mid ARV, High Rehab)
    {
        id: 5,
        address: "20 Smoke Trail",
        beds: 3, baths: 1, sqFt: 1200,
        condition: "Kitchen fire damage and smoke damage throughout. Requires full mitigation and new HVAC.",
        trueARV: 250000, trueRepairs: 70000, 
        trueMAO: Math.round((0.90 * 250000) - (2 * 70000) - 10000), // $75,000
        comps: [
            { id: 'A', price: 260000, date: '1 week ago', condition: 'Highest comp for renovated small home.', isGood: true },
            { id: 'B', price: 240000, date: '2 months ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'C', price: 300000, date: '1 month ago', condition: 'Two-story home (ignore).', isGood: false },
            { id: 'D', price: 255000, date: '3 weeks ago', condition: 'Solid ARV indicator.', isGood: true },
            { id: 'E', price: 150000, date: '6 months ago', condition: 'Sold As-Is with damage.', isGood: false },
            { id: 'F', price: 180000, date: '1 year ago', condition: 'Sale too old.', isGood: false } 
        ]
    },
    // 6. Quick Turn Rental (Low ARV, Very Low Rehab)
    {
        id: 6,
        address: "7 Renters Delight",
        beds: 2, baths: 1, sqFt: 800,
        condition: "Rent-ready, but needs new paint and deep clean to maximize rent/value.",
        trueARV: 180000, trueRepairs: 15000, 
        trueMAO: Math.round((0.90 * 180000) - (2 * 15000) - 10000), // $122,000
        comps: [
            { id: 'A', price: 185000, date: '2 weeks ago', condition: 'Identical unit, strong ARV.', isGood: true },
            { id: 'B', price: 190000, date: '1 month ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 160000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'D', price: 220000, date: '6 months ago', condition: 'Sold with a detached garage (ignore).', isGood: false },
            { id: 'E', price: 100000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 150000, date: '4 months ago', condition: 'Sold As-Is.', isGood: false } 
        ]
    },
    // 7. Hoarder House Cleanout (Mid ARV, Mid-High Rehab)
    {
        id: 7,
        address: "33 Clutter Court",
        beds: 3, baths: 2, sqFt: 1600,
        condition: "Major cleanout needed. Interior is trashed. Requires new floors, kitchen, and minor drywall repair.",
        trueARV: 350000, trueRepairs: 65000, 
        trueMAO: Math.round((0.90 * 350000) - (2 * 65000) - 10000), // $175,000
        comps: [
            { id: 'A', price: 340000, date: '1 week ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'B', price: 360000, date: '2 months ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'C', price: 400000, date: '1 month ago', condition: '4 bed, much larger (ignore).', isGood: false },
            { id: 'D', price: 355000, date: '3 weeks ago', condition: 'Solid ARV indicator.', isGood: true },
            { id: 'E', price: 250000, date: '6 months ago', condition: 'Sold by motivated seller.', isGood: false },
            { id: 'F', price: 200000, date: '1 year ago', condition: 'Sale too old.', isGood: false } 
        ]
    },
    // 8. Bad Area, Minimal Profit (Low ARV, Mid Rehab)
    {
        id: 8,
        address: "8 Tough Neighborhood",
        beds: 3, baths: 1, sqFt: 1100,
        condition: "Need new roof, HVAC, and full cosmetic overhaul. Area dictates low ARV cap.",
        trueARV: 170000, trueRepairs: 50000, 
        trueMAO: Math.round((0.90 * 170000) - (2 * 50000) - 10000), // $53,000
        comps: [
            { id: 'A', price: 165000, date: '2 weeks ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'B', price: 175000, date: '1 month ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'C', price: 200000, date: '3 months ago', condition: 'Just outside the area (ignore).', isGood: false },
            { id: 'D', price: 155000, date: '1 week ago', condition: 'Lowest ARV comp.', isGood: true },
            { id: 'E', price: 100000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 80000, date: '6 months ago', condition: 'Sold As-Is.', isGood: false } 
        ]
    },
    // 9. Good Structure, Full Cosmetic (Mid ARV, Mid Rehab)
    {
        id: 9,
        address: "11 All Systems Go",
        beds: 4, baths: 3, sqFt: 2000,
        condition: "All systems (HVAC, roof) are modern. Needs new kitchen, baths, and flooring throughout.",
        trueARV: 400000, trueRepairs: 55000, 
        trueMAO: Math.round((0.90 * 400000) - (2 * 55000) - 10000), // $240,000
        comps: [
            { id: 'A', price: 410000, date: '1 month ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'B', price: 390000, date: '2 weeks ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'C', price: 350000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'D', price: 450000, date: '1 week ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'E', price: 250000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 300000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 10. Large Rehab, Potential Addition (High ARV, Mid-High Rehab)
    {
        id: 10,
        address: "55 Copper Peak Dr",
        beds: 4, baths: 2, sqFt: 2500,
        condition: "Large home, requires new roof, windows, and full cosmetic. Potential for 3rd bath addition ($15k cost).",
        trueARV: 550000, trueRepairs: 80000, 
        trueMAO: Math.round((0.90 * 550000) - (2 * 80000) - 10000), // $335,000
        comps: [
            { id: 'A', price: 540000, date: '2 weeks ago', condition: 'Reliable ARV comp.', isGood: true },
            { id: 'B', price: 580000, date: '1 month ago', condition: 'Includes 3rd bath addition (good ARV indicator).', isGood: true },
            { id: 'C', price: 650000, date: '3 months ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'D', price: 555000, date: '1 week ago', condition: 'Highest ARV comp, good ceiling.', isGood: true },
            { id: 'E', price: 400000, date: '6 months ago', condition: 'Sold As-Is.', isGood: false },
            { id: 'F', price: 450000, date: '1 year ago', condition: 'Sale too old.', isGood: false } 
        ]
    },
    // 11. Basement Leak Fix (Mid ARV, Low-Mid Rehab)
    {
        id: 11,
        address: "65 Riverbend Circle",
        beds: 3, baths: 2, sqFt: 1800,
        condition: "Modern open concept, but basement requires $15k in waterproofing. Light cosmetic upstairs.",
        trueARV: 420000, trueRepairs: 40000, 
        trueMAO: Math.round((0.90 * 420000) - (2 * 40000) - 10000), // $288,000
        comps: [
            { id: 'A', price: 410000, date: '2 weeks ago', condition: 'Perfect match, same neighborhood.', isGood: true },
            { id: 'B', price: 445000, date: '1 month ago', condition: 'Fully finished basement (subject is unfinished).', isGood: false },
            { id: 'C', price: 425000, date: '1 week ago', condition: 'Recent sale, excellent ARV indicator.', isGood: true },
            { id: 'D', price: 300000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'E', price: 415000, date: '3 months ago', condition: 'Good comp, slight adjustment for age.', isGood: true },
            { id: 'F', price: 350000, date: '2 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 12. Small Lot, Premium Area (High ARV, Low Rehab)
    {
        id: 12,
        address: "22 Cypress Way",
        beds: 4, baths: 3, sqFt: 2200,
        condition: "Top school district. Needs quick cosmetic refresh to meet buyer expectations. Systems are sound.",
        trueARV: 750000, trueRepairs: 30000, 
        trueMAO: Math.round((0.90 * 750000) - (2 * 30000) - 10000), // $605,000
        comps: [
            { id: 'A', price: 745000, date: '1 month ago', condition: 'Similar size, perfect comp.', isGood: true },
            { id: 'B', price: 700000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'C', price: 850000, date: '2 months ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'D', price: 760000, date: '2 weeks ago', condition: 'High-end finishes, good ARV ceiling.', isGood: true },
            { id: 'E', price: 650000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'F', price: 500000, date: '6 months ago', condition: 'Small 3 bed unit, ignore.', isGood: false } 
        ]
    },
    // 13. Deferred Maintenance Special (Mid-Low ARV, Mid Rehab)
    {
        id: 13,
        address: "18 Pine Needle Rd",
        beds: 3, baths: 1, sqFt: 1300,
        condition: "Needs roof, HVAC, and kitchen updates. General deferred maintenance for 10+ years.",
        trueARV: 260000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 260000) - (2 * 60000) - 10000), // $104,000
        comps: [
            { id: 'A', price: 255000, date: '3 weeks ago', condition: 'Comparable rehab, reliable.', isGood: true },
            { id: 'B', price: 280000, date: '1 month ago', condition: 'Larger lot and better view (adjust down).', isGood: true },
            { id: 'C', price: 220000, date: '2 months ago', condition: 'Sold by motivated seller, low price.', isGood: false },
            { id: 'D', price: 350000, date: '1 year ago', condition: 'Completely different area.', isGood: false },
            { id: 'E', price: 265000, date: '1 week ago', condition: 'Excellent recent comp.', isGood: true },
            { id: 'F', price: 150000, date: '6 months ago', condition: 'Burned down property.', isGood: false } 
        ]
    },
    // 14. Multifamily Conversion Potential (High ARV, High Rehab)
    {
        id: 14,
        address: "41 Industrial Way",
        beds: 4, baths: 2, sqFt: 2500,
        condition: "Large single-family house zoned for duplex conversion. Needs full gut, new electrical/plumbing for two units.",
        trueARV: 600000, trueRepairs: 120000, 
        trueMAO: Math.round((0.90 * 600000) - (2 * 120000) - 10000), // $280,000
        comps: [
            { id: 'A', price: 620000, date: '1 month ago', condition: 'Recently converted duplex.', isGood: true },
            { id: 'B', price: 550000, date: '3 months ago', condition: 'Standard single-family remodel (not true ARV).', isGood: false },
            { id: 'C', price: 590000, date: '2 weeks ago', condition: 'Converted property, good ceiling price.', isGood: true },
            { id: 'D', price: 700000, date: '6 weeks ago', condition: 'New commercial development (ignore).', isGood: false },
            { id: 'E', price: 610000, date: '2 months ago', condition: 'Solid duplex comp.', isGood: true },
            { id: 'F', price: 400000, date: '1 year ago', condition: 'Sold as vacant land.', isGood: false } 
        ]
    },
    // 15. Flooded Basement/Mold (Mid-Low ARV, Very High Rehab)
    {
        id: 15,
        address: "707 Puddle Place",
        beds: 3, baths: 1, sqFt: 1000,
        condition: "Unfinished basement flooded. Significant mold and HVAC replacement required.",
        trueARV: 200000, trueRepairs: 80000, 
        trueMAO: Math.round((0.90 * 200000) - (2 * 80000) - 10000), // $10,000
        comps: [
            { id: 'A', price: 195000, date: '1 week ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 250000, date: '3 months ago', condition: 'Recently added second bath (subject only has one).', isGood: false },
            { id: 'C', price: 205000, date: '2 months ago', condition: 'Best reliable comp.', isGood: true },
            { id: 'D', price: 150000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'E', price: 210000, date: '1 month ago', condition: 'High end of comp range.', isGood: true },
            { id: 'F', price: 100000, date: '6 months ago', condition: 'Foreclosure, ignore.', isGood: false } 
        ]
    },
    // 16. Average Suburban Flip (Mid ARV, Mid Rehab)
    {
        id: 16,
        address: "800 Generic Ave",
        beds: 4, baths: 3, sqFt: 2100,
        condition: "Needs full cosmetic updates throughout. Roof is 15 years old and needs replacement.",
        trueARV: 450000, trueRepairs: 65000, 
        trueMAO: Math.round((0.90 * 450000) - (2 * 65000) - 10000), // $265,000
        comps: [
            { id: 'A', price: 440000, date: '1 month ago', condition: 'Standard flip, useable.', isGood: true },
            { id: 'B', price: 480000, date: '2 weeks ago', condition: 'Oversized lot, adjust down.', isGood: false },
            { id: 'C', price: 460000, date: '1 week ago', condition: 'Excellent ARV comp.', isGood: true },
            { id: 'D', price: 350000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'E', price: 450000, date: '3 months ago', condition: 'Perfect match to subject ARV.', isGood: true },
            { id: 'F', price: 550000, date: '2 months ago', condition: 'Brand new construction (ignore).', isGood: false } 
        ]
    },
    // 17. High-End Condos (High ARV, Low Rehab)
    {
        id: 17,
        address: "15 Sky Tower, Unit 12B",
        beds: 2, baths: 2, sqFt: 1100,
        condition: "High-rise unit. Needs minor kitchen refresh and new flooring. Excellent views are a factor.",
        trueARV: 650000, trueRepairs: 20000, 
        trueMAO: Math.round((0.90 * 650000) - (2 * 20000) - 10000), // $535,000
        comps: [
            { id: 'A', price: 645000, date: '1 week ago', condition: 'Identical unit, strong ARV.', isGood: true },
            { id: 'B', price: 700000, date: '1 month ago', condition: 'Penthouse view (adjust down).', isGood: false },
            { id: 'C', price: 660000, date: '2 weeks ago', condition: 'Best recent comp.', isGood: true },
            { id: 'D', price: 550000, date: '6 months ago', condition: 'Facing alley (ignore).', isGood: false },
            { id: 'E', price: 650000, date: '3 months ago', condition: 'Reliable sale, similar floor.', isGood: true },
            { id: 'F', price: 400000, date: '1 year ago', condition: 'Too old.', isGood: false } 
        ]
    },
    // 18. Fire Damage Repair (Mid ARV, Very High Rehab)
    {
        id: 18,
        address: "102 Ashes Drive",
        beds: 3, baths: 2, sqFt: 1600,
        condition: "Minor fire damage in the kitchen, smoke damage throughout. Requires full system checks and mitigation.",
        trueARV: 300000, trueRepairs: 90000, 
        trueMAO: Math.round((0.90 * 300000) - (2 * 90000) - 10000), // $80,000
        comps: [
            { id: 'A', price: 305000, date: '1 month ago', condition: 'Similar size, perfect comp.', isGood: true },
            { id: 'B', price: 250000, date: '2 months ago', condition: 'Sold as-is, not renovated.', isGood: false },
            { id: 'C', price: 310000, date: '2 weeks ago', condition: 'High-end ARV comp.', isGood: true },
            { id: 'D', price: 285000, date: '3 months ago', condition: 'Solid ARV comp.', isGood: true },
            { id: 'E', price: 400000, date: '1 year ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 200000, date: '6 months ago', condition: 'Vacant lot sale.', isGood: false } 
        ]
    },
    // 19. Historical District Fix (Low ARV, Mid Rehab)
    {
        id: 19,
        address: "7 Old Colonial St",
        beds: 3, baths: 1, sqFt: 1250,
        condition: "Historical property. Interior needs full renovation, but exterior brick/windows must be preserved (costly).",
        trueARV: 220000, trueRepairs: 55000, 
        trueMAO: Math.round((0.90 * 220000) - (2 * 55000) - 10000), // $78,000
        comps: [
            { id: 'A', price: 215000, date: '1 week ago', condition: 'Historic district remodel, reliable.', isGood: true },
            { id: 'B', price: 250000, date: '1 month ago', condition: 'Recently added second floor (subject is single-story).', isGood: false },
            { id: 'C', price: 225000, date: '2 weeks ago', condition: 'Best recent comp.', isGood: true },
            { id: 'D', price: 150000, date: '1 year ago', condition: 'Sale too old.', isGood: false },
            { id: 'E', price: 220000, date: '3 months ago', condition: 'Excellent ARV match.', isGood: true },
            { id: 'F', price: 100000, date: '6 months ago', condition: 'Commercial property.', isGood: false } 
        ]
    },
    // 20. New Roof and Systems (Mid ARV, Mid-High Rehab)
    {
        id: 20,
        address: "10 Cedar Lane",
        beds: 4, baths: 2, sqFt: 1750,
        condition: "Cosmetic wear, but roof, furnace, and AC are all original and must be replaced.",
        trueARV: 375000, trueRepairs: 70000, 
        trueMAO: Math.round((0.90 * 375000) - (2 * 70000) - 10000), // $187,500
        comps: [
            { id: 'A', price: 380000, date: '1 month ago', condition: 'Similar size, great ARV.', isGood: true },
            { id: 'B', price: 450000, date: '2 weeks ago', condition: 'Significantly larger lot and pool (exclude).', isGood: false },
            { id: 'C', price: 370000, date: '1 week ago', condition: 'Solid ARV comp.', isGood: true },
            { id: 'D', price: 390000, date: '3 months ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'E', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 300000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 21. Light Cosmetic, Investor Special (Mid ARV, Low Rehab)
    {
        id: 21,
        address: "42 Market Square",
        beds: 2, baths: 1, sqFt: 1050,
        condition: "Ready to rent but needs new paint and carpet to maximize rent rate. Perfect buy-and-hold.",
        trueARV: 210000, trueRepairs: 20000, 
        trueMAO: Math.round((0.90 * 210000) - (2 * 20000) - 10000), // $139,000
        comps: [
            { id: 'A', price: 205000, date: '1 month ago', condition: 'Similar condition, good ARV.', isGood: true },
            { id: 'B', price: 230000, date: '2 weeks ago', condition: 'Fully updated kitchen (adjust down).', isGood: false },
            { id: 'C', price: 215000, date: '1 week ago', condition: 'Excellent comp.', isGood: true },
            { id: 'D', price: 180000, date: '3 months ago', condition: 'Sold by family, low price.', isGood: false },
            { id: 'E', price: 210000, date: '4 months ago', condition: 'Solid ARV match.', isGood: true },
            { id: 'F', price: 150000, date: '1 year ago', condition: 'Too old.', isGood: false } 
        ]
    },
    // 22. Foundation Issues (Mid-High ARV, Extremely High Rehab)
    {
        id: 22,
        address: "100 Shakey Ground Rd",
        beds: 4, baths: 3, sqFt: 2400,
        condition: "Major foundation issues. Requires $70k in structural work plus cosmetic updates.",
        trueARV: 500000, trueRepairs: 110000, 
        trueMAO: Math.round((0.90 * 500000) - (2 * 110000) - 10000), // $220,000
        comps: [
            { id: 'A', price: 490000, date: '1 week ago', condition: 'Similar home, strong ARV.', isGood: true },
            { id: 'B', price: 520000, date: '1 month ago', condition: 'High-end remodel, top ARV.', isGood: true },
            { id: 'C', price: 400000, date: '3 months ago', condition: 'Sold with foundation issues (ignore).', isGood: false },
            { id: 'D', price: 505000, date: '2 weeks ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 600000, date: '1 year ago', condition: '4,000 sq ft home (ignore).', isGood: false },
            { id: 'F', price: 450000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 23. Vacant Lot Potential (High ARV, Low Rehab)
    {
        id: 23,
        address: "303 Infill Street",
        beds: 3, baths: 2, sqFt: 1500,
        condition: "Small lot, high price/sq ft area. Needs quick light cosmetic updates to flip fast.",
        trueARV: 580000, trueRepairs: 25000, 
        trueMAO: Math.round((0.90 * 580000) - (2 * 25000) - 10000), // $462,000
        comps: [
            { id: 'A', price: 590000, date: '1 month ago', condition: 'Similar size, perfect comp.', isGood: true },
            { id: 'B', price: 550000, date: '3 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'C', price: 650000, date: '2 weeks ago', condition: 'Larger lot, adjust down.', isGood: false },
            { id: 'D', price: 585000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 450000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 500000, date: '6 months ago', condition: '3 story home (ignore).', isGood: false } 
        ]
    },
    // 24. Full Gut, Large Home (High ARV, Very High Rehab)
    {
        id: 24,
        address: "777 Money Pit Mansion",
        beds: 5, baths: 4, sqFt: 3500,
        condition: "Requires total gut. All systems, windows, roof, and interior must be new.",
        trueARV: 900000, trueRepairs: 180000, 
        trueMAO: Math.round((0.90 * 900000) - (2 * 180000) - 10000), // $440,000
        comps: [
            { id: 'A', price: 920000, date: '1 month ago', condition: 'Top comp, high end.', isGood: true },
            { id: 'B', price: 850000, date: '3 months ago', condition: 'Standard finishes, solid ARV.', isGood: true },
            { id: 'C', price: 900000, date: '2 weeks ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'D', price: 1100000, date: '1 year ago', condition: 'Luxury custom build (ignore).', isGood: false },
            { id: 'E', price: 700000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false },
            { id: 'F', price: 800000, date: '1 year ago', condition: 'Too old.', isGood: false } 
        ]
    },
    // 25. Minor Cosmetic Only (Low ARV, Very Low Rehab)
    {
        id: 25,
        address: "100 Happy Trails Ln",
        beds: 2, baths: 1, sqFt: 850,
        condition: "Move-in ready condition. Needs only fresh exterior paint and minor landscaping.",
        trueARV: 160000, trueRepairs: 8000, 
        trueMAO: Math.round((0.90 * 160000) - (2 * 8000) - 10000), // $128,000
        comps: [
            { id: 'A', price: 165000, date: '1 week ago', condition: 'Perfect match, ideal ARV.', isGood: true },
            { id: 'B', price: 155000, date: '3 weeks ago', condition: 'Good comp, slight adjustment for age.', isGood: true },
            { id: 'C', price: 200000, date: '2 months ago', condition: 'Large garage added (exclude).', isGood: false },
            { id: 'D', price: 160000, date: '2 months ago', condition: 'Solid match to true ARV.', isGood: true },
            { id: 'E', price: 100000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 130000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 26. Bad Electrical/Plumbing (Mid-High ARV, High Rehab)
    {
        id: 26,
        address: "44 Sparky Street",
        beds: 3, baths: 2, sqFt: 1700,
        condition: "Kitchen and baths are fine, but the entire electrical and plumbing system must be replaced.",
        trueARV: 380000, trueRepairs: 85000, 
        trueMAO: Math.round((0.90 * 380000) - (2 * 85000) - 10000), // $162,000
        comps: [
            { id: 'A', price: 375000, date: '1 month ago', condition: 'Similar size, good ARV.', isGood: true },
            { id: 'B', price: 400000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 385000, date: '1 week ago', condition: 'Excellent recent comp.', isGood: true },
            { id: 'D', price: 300000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'E', price: 450000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 320000, date: '6 months ago', condition: 'Investor as-is.', isGood: false } 
        ]
    },
    // 27. High ARV, Needs Cosmetic (High ARV, Low-Mid Rehab)
    {
        id: 27,
        address: "909 Vista Point",
        beds: 4, baths: 3, sqFt: 2800,
        condition: "Luxury neighborhood. Needs cosmetic refresh of kitchen and baths to reach top market value.",
        trueARV: 720000, trueRepairs: 45000, 
        trueMAO: Math.round((0.90 * 720000) - (2 * 45000) - 10000), // $548,000
        comps: [
            { id: 'A', price: 730000, date: '1 week ago', condition: 'Highest comp, good ARV target.', isGood: true },
            { id: 'B', price: 680000, date: '2 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'C', price: 725000, date: '3 weeks ago', condition: 'Perfect match, ideal ARV.', isGood: true },
            { id: 'D', price: 800000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'E', price: 550000, date: '6 months ago', condition: 'Investor as-is.', isGood: false },
            { id: 'F', price: 900000, date: '2 months ago', condition: 'New construction (ignore).', isGood: false } 
        ]
    },
    // 28. Garage Conversion Opportunity (Mid ARV, Mid Rehab)
    {
        id: 28,
        address: "505 Corner Plot",
        beds: 3, baths: 2, sqFt: 1350,
        condition: "Garage can be converted to an extra bedroom/office (estimated $20k). Needs full interior update.",
        trueARV: 330000, trueRepairs: 55000, 
        trueMAO: Math.round((0.90 * 330000) - (2 * 55000) - 10000), // $177,000
        comps: [
            { id: 'A', price: 325000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 340000, date: '2 weeks ago', condition: 'Includes garage conversion (good ARV).', isGood: true },
            { id: 'C', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 335000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 400000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 280000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 29. Tiny Home, High Price/SqFt (Low ARV, Low Rehab)
    {
        id: 29,
        address: "88 Little Cottage",
        beds: 1, baths: 1, sqFt: 500,
        condition: "Micro unit in a trendy area. Needs minor cosmetic updates only.",
        trueARV: 190000, trueRepairs: 15000, 
        trueMAO: Math.round((0.90 * 190000) - (2 * 15000) - 10000), // $121,000
        comps: [
            { id: 'A', price: 185000, date: '1 week ago', condition: 'Identical unit, reliable.', isGood: true },
            { id: 'B', price: 200000, date: '1 month ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 250000, date: '2 months ago', condition: 'Large yard, subject has small patio.', isGood: false },
            { id: 'D', price: 195000, date: '3 weeks ago', condition: 'Best recent comp.', isGood: true },
            { id: 'E', price: 150000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 100000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 30. High Risk, High Reward (Mid-High ARV, Very High Rehab)
    {
        id: 30,
        address: "700 Cliffside View",
        beds: 5, baths: 3, sqFt: 2800,
        condition: "High-value area, but house is completely dilapidated. Full structural, system, and cosmetic gut required.",
        trueARV: 680000, trueRepairs: 150000, 
        trueMAO: Math.round((0.90 * 680000) - (2 * 150000) - 10000), // $302,000
        comps: [
            { id: 'A', price: 700000, date: '1 month ago', condition: 'Fully renovated, excellent ARV.', isGood: true },
            { id: 'B', price: 650000, date: '2 months ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'C', price: 800000, date: '1 week ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'D', price: 670000, date: '3 weeks ago', condition: 'Best recent comp.', isGood: true },
            { id: 'E', price: 500000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 400000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 31. Out of State Investor Special (Low ARV, Mid Rehab)
    {
        id: 31,
        address: "420 Rust Belt Way",
        beds: 3, baths: 1, sqFt: 1150,
        condition: "Needs full kitchen, bath, and new flooring/paint. All systems functioning but old.",
        trueARV: 140000, trueRepairs: 35000, 
        trueMAO: Math.round((0.90 * 140000) - (2 * 35000) - 10000), // $46,000
        comps: [
            { id: 'A', price: 135000, date: '1 month ago', condition: 'Similar condition, good ARV.', isGood: true },
            { id: 'B', price: 150000, date: '2 weeks ago', condition: 'High end of comp range.', isGood: true },
            { id: 'C', price: 180000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 140000, date: '1 week ago', condition: 'Perfect match to true ARV.', isGood: true },
            { id: 'E', price: 100000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false },
            { id: 'F', price: 200000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false } 
        ]
    },
    // 32. Standard Flip, Quick Turn (Mid ARV, Low-Mid Rehab)
    {
        id: 32,
        address: "17 Good Deal St",
        beds: 3, baths: 2, sqFt: 1550,
        condition: "Needs new kitchen counters/appliances, updated bathrooms, and fresh paint.",
        trueARV: 340000, trueRepairs: 45000, 
        trueMAO: Math.round((0.90 * 340000) - (2 * 45000) - 10000), // $206,000
        comps: [
            { id: 'A', price: 345000, date: '1 month ago', condition: 'Excellent comp.', isGood: true },
            { id: 'B', price: 320000, date: '3 weeks ago', condition: 'Slightly dated interior.', isGood: true },
            { id: 'C', price: 360000, date: '2 months ago', condition: 'Premium finishes, adjust down.', isGood: true },
            { id: 'D', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'E', price: 400000, date: '6 months ago', condition: 'Next neighborhood over (ignore).', isGood: false },
            { id: 'F', price: 280000, date: '4 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 33. Rural, High Acreage (Mid ARV, Mid Rehab)
    {
        id: 33,
        address: "22 Farmland Way",
        beds: 4, baths: 2, sqFt: 2000,
        condition: "High acreage boosts ARV. House needs new roof and full cosmetic update.",
        trueARV: 400000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 400000) - (2 * 60000) - 10000), // $230,000
        comps: [
            { id: 'A', price: 410000, date: '2 weeks ago', condition: 'Similar acreage, good ARV.', isGood: true },
            { id: 'B', price: 350000, date: '1 month ago', condition: 'Low acreage (ignore).', isGood: false },
            { id: 'C', price: 405000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'D', price: 450000, date: '3 months ago', condition: 'Includes large barn (subject lacks one).', isGood: false },
            { id: 'E', price: 395000, date: '4 months ago', condition: 'Solid ARV comp.', isGood: true },
            { id: 'F', price: 300000, date: '1 year ago', condition: 'Too old.', isGood: false } 
        ]
    },
    // 34. Multi-Unit Property (High ARV, Mid Rehab)
    {
        id: 34,
        address: "98 Duplex Drive",
        beds: 6, baths: 3, sqFt: 2800,
        condition: "Duplex needs cosmetic updates in both units to maximize rents. Systems are functional.",
        trueARV: 620000, trueRepairs: 70000, 
        trueMAO: Math.round((0.90 * 620000) - (2 * 70000) - 10000), // $408,000
        comps: [
            { id: 'A', price: 600000, date: '1 month ago', condition: 'Similar duplex, good ARV.', isGood: true },
            { id: 'B', price: 630000, date: '2 weeks ago', condition: 'Triplex unit (ignore).', isGood: false },
            { id: 'C', price: 625000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'D', price: 550000, date: '4 months ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'E', price: 400000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 700000, date: '3 months ago', condition: 'New construction townhome (ignore).', isGood: false } 
        ]
    },
    // 35. High Rehab, Small House (Low ARV, Mid-High Rehab)
    {
        id: 35,
        address: "12 Smallest Home Ln",
        beds: 2, baths: 1, sqFt: 700,
        condition: "Needs roof, electric panel, and full interior gut. Very old house.",
        trueARV: 120000, trueRepairs: 45000, 
        trueMAO: Math.round((0.90 * 120000) - (2 * 45000) - 10000), // $8,000
        comps: [
            { id: 'A', price: 125000, date: '1 month ago', condition: 'Similar size, perfect ARV.', isGood: true },
            { id: 'B', price: 100000, date: '3 weeks ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'C', price: 150000, date: '2 months ago', condition: 'Two-story unit (ignore).', isGood: false },
            { id: 'D', price: 120000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 80000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 60000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 36. Suburban Split-Level (Mid ARV, Mid Rehab)
    {
        id: 36,
        address: "77 Split Level Way",
        beds: 4, baths: 3, sqFt: 2200,
        condition: "Split-level style. Needs full cosmetic update and new HVAC system.",
        trueARV: 460000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 460000) - (2 * 60000) - 10000), // $284,000
        comps: [
            { id: 'A', price: 470000, date: '2 weeks ago', condition: 'Similar style, good ARV.', isGood: true },
            { id: 'B', price: 440000, date: '1 month ago', condition: 'Dated interior, lowest ARV comp.', isGood: true },
            { id: 'C', price: 500000, date: '3 months ago', condition: 'Pool added (ignore).', isGood: false },
            { id: 'D', price: 460000, date: '1 week ago', condition: 'Perfect match to true ARV.', isGood: true },
            { id: 'E', price: 350000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'F', price: 550000, date: '6 months ago', condition: 'New construction ranch (ignore).', isGood: false } 
        ]
    },
    // 37. High-End Custom Home (High ARV, Mid Rehab)
    {
        id: 37,
        address: "100 Gold Coast Dr",
        beds: 5, baths: 4, sqFt: 3500,
        condition: "Custom home, needs high-end kitchen and master bath renovation to match comps.",
        trueARV: 950000, trueRepairs: 100000, 
        trueMAO: Math.round((0.90 * 950000) - (2 * 100000) - 10000), // $645,000
        comps: [
            { id: 'A', price: 920000, date: '1 month ago', condition: 'Similar custom home, solid ARV.', isGood: true },
            { id: 'B', price: 1000000, date: '2 weeks ago', condition: 'Top end ARV comp.', isGood: true },
            { id: 'C', price: 1200000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 960000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 750000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false },
            { id: 'F', price: 800000, date: '4 months ago', condition: '4 bed, much smaller.', isGood: false } 
        ]
    },
    // 38. Cosmetic, Quick Flip (Mid ARV, Low Rehab)
    {
        id: 38,
        address: "10 Fast Flip Lane",
        beds: 3, baths: 2, sqFt: 1400,
        condition: "Needs paint, flooring, and minor kitchen updates. Systems are all good.",
        trueARV: 300000, trueRepairs: 30000, 
        trueMAO: Math.round((0.90 * 300000) - (2 * 30000) - 10000), // $200,000
        comps: [
            { id: 'A', price: 295000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 310000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 305000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 350000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 200000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 39. Massive Systems Failure (Mid ARV, Very High Rehab)
    {
        id: 39,
        address: "20 Systems Out Place",
        beds: 3, baths: 1, sqFt: 1100,
        condition: "HVAC, roof, and water heater all need immediate replacement. Light cosmetic needed.",
        trueARV: 270000, trueRepairs: 80000, 
        trueMAO: Math.round((0.90 * 270000) - (2 * 80000) - 10000), // $73,000
        comps: [
            { id: 'A', price: 265000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 280000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 220000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 275000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 300000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 200000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 40. High Sq Ft, Low Price/Sq Ft (Low ARV, Mid Rehab)
    {
        id: 40,
        address: "50 Wide Open Ranch",
        beds: 4, baths: 2, sqFt: 2500,
        condition: "Large ranch home. Needs full interior renovation. All systems function but are old.",
        trueARV: 360000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 360000) - (2 * 60000) - 10000), // $194,000
        comps: [
            { id: 'A', price: 350000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 375000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 300000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 360000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 450000, date: '3 months ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'F', price: 250000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 41. Starter Home, Major Upgrades (Mid ARV, Mid Rehab)
    {
        id: 41,
        address: "70 Suburban Starter",
        beds: 3, baths: 1, sqFt: 1100,
        condition: "Needs full kitchen, bath, and electrical upgrade to modern standards.",
        trueARV: 240000, trueRepairs: 50000, 
        trueMAO: Math.round((0.90 * 240000) - (2 * 50000) - 10000), // $106,000
        comps: [
            { id: 'A', price: 235000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 250000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 200000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 245000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 300000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 150000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 42. High-Density Townhome (Mid ARV, Low Rehab)
    {
        id: 42,
        address: "505 Townhouse Lane",
        beds: 3, baths: 2, sqFt: 1250,
        condition: "HOA handles exterior. Interior needs only light cosmetic updates (paint, carpet).",
        trueARV: 310000, trueRepairs: 20000, 
        trueMAO: Math.round((0.90 * 310000) - (2 * 20000) - 10000), // $229,000
        comps: [
            { id: 'A', price: 305000, date: '1 month ago', condition: 'Similar unit, good ARV.', isGood: true },
            { id: 'B', price: 320000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 280000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 315000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 350000, date: '3 months ago', condition: 'End unit with premium (ignore).', isGood: false },
            { id: 'F', price: 250000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 43. Old Systems, Clean Interior (Mid ARV, Mid-High Rehab)
    {
        id: 43,
        address: "99 Antique Ave",
        beds: 4, baths: 2, sqFt: 1900,
        condition: "Clean interior but requires new furnace, water heater, and electrical panel.",
        trueARV: 390000, trueRepairs: 75000, 
        trueMAO: Math.round((0.90 * 390000) - (2 * 75000) - 10000), // $191,000
        comps: [
            { id: 'A', price: 380000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 400000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 300000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 395000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 450000, date: '3 months ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'F', price: 320000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 44. Low-End, High Volume Area (Low ARV, Mid Rehab)
    {
        id: 44,
        address: "70 Cheap Street",
        beds: 2, baths: 1, sqFt: 800,
        condition: "Needs full interior renovation (kitchen, bath, flooring). High volume turnover area.",
        trueARV: 130000, trueRepairs: 40000, 
        trueMAO: Math.round((0.90 * 130000) - (2 * 40000) - 10000), // $37,000
        comps: [
            { id: 'A', price: 125000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 135000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 100000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 130000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 150000, date: '3 months ago', condition: '3 bed, much larger.', isGood: false },
            { id: 'F', price: 80000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 45. Cosmetic Fix, High ARV (High ARV, Low Rehab)
    {
        id: 45,
        address: "20 Millionaire Row",
        beds: 4, baths: 3, sqFt: 3000,
        condition: "High-end neighborhood. Needs cosmetic refresh of master bath and kitchen to maximize ARV.",
        trueARV: 800000, trueRepairs: 50000, 
        trueMAO: Math.round((0.90 * 800000) - (2 * 50000) - 10000), // $610,000
        comps: [
            { id: 'A', price: 780000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 820000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 900000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 810000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 600000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false },
            { id: 'F', price: 500000, date: '4 months ago', condition: '3 bed, much smaller.', isGood: false } 
        ]
    },
    // 46. Deferred Maintenance Special (Mid ARV, Mid-High Rehab)
    {
        id: 46,
        address: "100 Backlog Blvd",
        beds: 3, baths: 2, sqFt: 1600,
        condition: "Roof is old, needs full interior renovation and new systems (HVAC, water heater).",
        trueARV: 320000, trueRepairs: 70000, 
        trueMAO: Math.round((0.90 * 320000) - (2 * 70000) - 10000), // $138,000
        comps: [
            { id: 'A', price: 315000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 330000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 325000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 400000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 200000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 47. Small Ranch Home (Low ARV, Low-Mid Rehab)
    {
        id: 47,
        address: "77 Ranch House Rd",
        beds: 2, baths: 1, sqFt: 900,
        condition: "Ranch style. Needs new flooring, paint, and minor kitchen updates.",
        trueARV: 180000, trueRepairs: 25000, 
        trueMAO: Math.round((0.90 * 180000) - (2 * 25000) - 10000), // $102,000
        comps: [
            { id: 'A', price: 175000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 185000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 150000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 180000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 220000, date: '3 months ago', condition: '3 bed, much larger.', isGood: false },
            { id: 'F', price: 120000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 48. High Volume, Low Price Area (Low ARV, Mid Rehab)
    {
        id: 48,
        address: "22 Busy Street",
        beds: 3, baths: 1, sqFt: 1200,
        condition: "Needs full interior renovation. High volume rental area.",
        trueARV: 150000, trueRepairs: 45000, 
        trueMAO: Math.round((0.90 * 150000) - (2 * 45000) - 10000), // $35,000
        comps: [
            { id: 'A', price: 145000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 155000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 110000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 150000, date: '1 week ago', condition: 'Excellent match to true ARV.', isGood: true },
            { id: 'E', price: 180000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 90000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    },
    // 49. Large Lot, Suburbia (Mid ARV, Mid Rehab)
    {
        id: 49,
        address: "33 Acreage Drive",
        beds: 4, baths: 3, sqFt: 2100,
        condition: "Large lot, needs full cosmetic update and new roof.",
        trueARV: 430000, trueRepairs: 60000, 
        trueMAO: Math.round((0.90 * 430000) - (2 * 60000) - 10000), // $257,000
        comps: [
            { id: 'A', price: 420000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 440000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 350000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 435000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 500000, date: '3 months ago', condition: 'New construction (ignore).', isGood: false },
            { id: 'F', price: 380000, date: '6 months ago', condition: 'As-is investor sale.', isGood: false } 
        ]
    },
    // 50. Final Heavy Rehab (Mid ARV, Very High Rehab)
    {
        id: 50,
        address: "100 Finish Line Way",
        beds: 3, baths: 2, sqFt: 1500,
        condition: "Full gut job. Needs new roof, all systems, and total interior renovation.",
        trueARV: 300000, trueRepairs: 100000, 
        trueMAO: Math.round((0.90 * 300000) - (2 * 100000) - 10000), // $60,000
        comps: [
            { id: 'A', price: 295000, date: '1 month ago', condition: 'Similar size, solid ARV.', isGood: true },
            { id: 'B', price: 310000, date: '2 weeks ago', condition: 'High-end finishes, adjust down.', isGood: true },
            { id: 'C', price: 250000, date: '1 year ago', condition: 'Too old.', isGood: false },
            { id: 'D', price: 305000, date: '1 week ago', condition: 'Excellent recent sale.', isGood: true },
            { id: 'E', price: 350000, date: '3 months ago', condition: '4 bed, much larger.', isGood: false },
            { id: 'F', price: 200000, date: '6 months ago', condition: 'Foreclosure sale.', isGood: false } 
        ]
    }
];

let currentProperty = null;
let currentPropertyIndex = 0;

// Helper function to format currency
const formatCurrency = (amount) => {
    // Handle potential negative or zero MAO
    if (amount < 0) {
        return `($${Math.abs(amount).toLocaleString()})`;
    }
    return `$${amount.toLocaleString()}`;
};

// Function to load the current property data into the HTML
function loadProperty(property) {
    currentProperty = property;
    
    // Reset inputs and visibility
    document.getElementById('arv-form').reset();
    document.getElementById('results').classList.add('hidden');
    document.getElementById('feedback').className = '';
    document.getElementById('player-mao').textContent = '--';
    document.getElementById('final-score').textContent = '-- / 100';
    
    // Disable the "Next Challenge" button until the player submits this deal
    document.getElementById('next-challenge-btn').disabled = true;

    // Update Property Details
    document.getElementById('property-id').textContent = `${property.id}`;
    document.getElementById('property-address').textContent = property.address;
    document.getElementById('property-beds').textContent = property.beds;
    document.getElementById('property-baths').textContent = property.baths;
    document.getElementById('property-sqft').textContent = property.sqFt.toLocaleString();
    document.getElementById('property-condition').textContent = property.condition;

    // Update Comps List
    const compsList = document.getElementById('comps-list');
    compsList.innerHTML = ''; // Clear previous comps
    property.comps.forEach(comp => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Comp ${comp.id}:</strong> ${formatCurrency(comp.price)} | ${comp.date}<br>
            <span style="color: #b0b0b0;">${comp.condition}</span>
        `;
        // Note: comp.isGood is tracked internally for scoring but not shown to user
        compsList.appendChild(li);
    });

    // Populate Comp Checkboxes
    const compCheckboxes = document.getElementById('comp-checkboxes');
    compCheckboxes.innerHTML = ''; // Clear previous checkboxes
    property.comps.forEach(comp => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="checkbox" name="selected-comps" value="${comp.id}">
            Comp ${comp.id}
        `;
        compCheckboxes.appendChild(label);
    });
}

// Function to calculate score based on deviation
function calculateScore(playerValue, trueValue, tolerance) {
    const deviation = Math.abs(playerValue - trueValue);
    
    if (deviation <= tolerance) return 100; // Perfect score
    
    // Calculate score based on percentage deviation, capped at 100
    // Max score loss is 100 points, over a range of 2.5x the tolerance
    // Score loss formula: (deviation / (tolerance * 2.5)) * 100
    
    const maxDeviationForZeroScore = tolerance * 2.5;
    if (deviation >= maxDeviationForZeroScore) return 0;
    
    const score = 100 - (deviation / maxDeviationForZeroScore) * 100;
    return Math.round(Math.max(0, score)); // Ensure score is not negative
}

// Function to determine overall grade
function getGrade(score) {
    if (score >= 90) return 'A+ (Excellent!)';
    if (score >= 80) return 'A (Great Job!)';
    if (score >= 70) return 'B (Solid Analysis)';
    if (score >= 60) return 'C (Needs Improvement)';
    return 'D (Off the Mark)';
}

// Function to provide detailed feedback
function getDetailedFeedback(arvScore, repairsScore, compScore, maoScore, finalScore) {
    let feedbackHTML = '';
    let feedbackClass = 'feedback-bad'; // Default class

    // Comp Selection Feedback
    if (compScore >= 90) {
        feedbackHTML += '<p><strong>Comp Selection:</strong> Excellent! You identified the most relevant comparable properties. 🎯</p>';
    } else if (compScore >= 70) {
        feedbackHTML += '<p><strong>Comp Selection:</strong> Good. You selected mostly relevant comps, but may have included some outliers or missed key ones.</p>';
    } else {
        feedbackHTML += '<p><strong>Comp Selection:</strong> Needs Work. Review which comps are most similar (date, condition, features). ⚠️</p>';
    }

    // ARV Feedback
    if (arvScore >= 90) {
        feedbackHTML += '<p><strong>ARV Estimate:</strong> Excellent! Your ARV estimate was spot on. 🎯</p>';
    } else if (arvScore >= 70) {
        feedbackHTML += '<p><strong>ARV Estimate:</strong> Good. Your ARV was close, but you may have been slightly swayed by the highest or lowest comps.</p>';
    } else {
        feedbackHTML += '<p><strong>ARV Estimate:</strong> Needs Work. Re-examine the comps (especially the most recent and relevant ones) for a better ARV. ⚠️</p>';
    }

    // Repairs Feedback
    if (repairsScore >= 90) {
        feedbackHTML += '<p><strong>Repairs Estimate:</strong> Excellent! You nailed the repair budget based on the property condition. 🎯</p>';
    } else if (repairsScore >= 70) {
        feedbackHTML += '<p><strong>Repairs Estimate:</strong> Good. Your repair budget was reasonable, but check for missed big-ticket items (Roof, HVAC, Foundation).</p>';
    } else {
        feedbackHTML += '<p><strong>Repairs Estimate:</strong> Needs Work. Your repair budget was significantly off. Be sure to account for all major systems and full cosmetic overhaul if needed. ⚠️</p>';
    }

    // MAO Calculation Feedback
    if (maoScore >= 90) {
        feedbackHTML += '<p><strong>MAO Calculation:</strong> Excellent! Your MAO calculation was accurate. 🎯</p>';
    } else if (maoScore >= 70) {
        feedbackHTML += '<p><strong>MAO Calculation:</strong> Good. Your MAO was close, but double-check your math and formula application.</p>';
    } else {
        feedbackHTML += '<p><strong>MAO Calculation:</strong> Needs Work. Review the MAO formula: (ARV × 90%) - (Repairs × 2) - $10,000. ⚠️</p>';
    }

    // Final Grade/Overall Feedback
    if (finalScore >= 90) {
        feedbackHTML += '<p style="margin-top: 10px;"><strong>Overall Grade:</strong> You are a highly accurate wholesaler. Keep making offers like this! 💪</p>';
        feedbackClass = 'feedback-good';
    } else if (finalScore >= 70) {
        feedbackHTML += '<p style="margin-top: 10px;"><strong>Overall Grade:</strong> A solid, profitable offer. You are ready to close deals. ✓</p>';
        feedbackClass = 'feedback-good';
    } else {
        feedbackHTML += '<p style="margin-top: 10px;"><strong>Overall Grade:</strong> Caution! This offer could have left too much money on the table, or worse, resulted in an unprofitable deal for your buyer. 🚫</p>';
        feedbackClass = 'feedback-bad';
    }

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerHTML = feedbackHTML;
    feedbackElement.className = feedbackClass;
}

// Main logic for form submission
document.getElementById('arv-form').addEventListener('submit', function(e) {
    e.preventDefault();

    if (!currentProperty) return;

    // 1. Get Player Inputs
    const playerARV = parseInt(document.getElementById('input-arv').value);
    const playerRepairs = parseInt(document.getElementById('input-repairs').value);
    const playerMAO = parseInt(document.getElementById('input-mao').value);

    // Get selected comps
    const selectedComps = Array.from(document.querySelectorAll('input[name="selected-comps"]:checked'))
        .map(cb => parseInt(cb.value));

    // 2. Score Calculations
    // Define a percentage-based tolerance for scoring
    const ARV_TOLERANCE = currentProperty.trueARV * 0.05; // 5% tolerance on ARV
    const REPAIRS_TOLERANCE = currentProperty.trueRepairs * 0.20; // 20% tolerance on Repairs
    const MAO_TOLERANCE = currentProperty.trueMAO * 0.10; // 10% tolerance on MAO

    const arvScore = calculateScore(playerARV, currentProperty.trueARV, ARV_TOLERANCE);
    const repairsScore = calculateScore(playerRepairs, currentProperty.trueRepairs, REPAIRS_TOLERANCE);
    const maoScore = calculateScore(playerMAO, currentProperty.trueMAO, MAO_TOLERANCE);

    // Calculate comp selection score
    const goodComps = currentProperty.comps.filter(c => c.isGood).map(c => c.id);
    const correctSelections = selectedComps.filter(id => goodComps.includes(id)).length;
    const incorrectSelections = selectedComps.filter(id => !goodComps.includes(id)).length;
    const missedGoodComps = goodComps.filter(id => !selectedComps.includes(id)).length;

    // Comp score: 100% if all good comps selected and no bad ones, penalize for mistakes
    let compScore = 100;
    compScore -= (incorrectSelections * 20); // -20 points per bad comp selected
    compScore -= (missedGoodComps * 15); // -15 points per good comp missed
    compScore = Math.max(0, compScore);

    // Final score is a weighted average
    const finalScore = Math.round((compScore * 0.2) + (arvScore * 0.3) + (repairsScore * 0.2) + (maoScore * 0.3));
    const grade = getGrade(finalScore);

    // 4. Update Display
    document.getElementById('player-mao').textContent = formatCurrency(playerMAO);
    document.getElementById('final-score').textContent = `${finalScore} / 100 (${grade})`;
    document.getElementById('results').classList.remove('hidden');

    // Enable the "Next Challenge" button
    document.getElementById('next-challenge-btn').disabled = false;

    // Display True Values
    document.getElementById('true-arv').textContent = formatCurrency(currentProperty.trueARV);
    document.getElementById('true-repairs').textContent = formatCurrency(currentProperty.trueRepairs);
    document.getElementById('true-mao').textContent = formatCurrency(currentProperty.trueMAO);

    // 5. Provide Detailed Feedback
    getDetailedFeedback(arvScore, repairsScore, compScore, maoScore, finalScore);

    // Check for game end condition
    if (currentProperty.id === properties.length) {
        document.getElementById('next-challenge-btn').textContent = "Game Complete! View Final Stats";
        document.getElementById('next-challenge-btn').onclick = showFinalStats;
    }
});

// Function to advance to the next property
function loadNewProperty() {
    currentPropertyIndex++;
    if (currentPropertyIndex < properties.length) {
        loadProperty(properties[currentPropertyIndex]);
        window.scrollTo(0, 0); // Scroll to top for new deal
    } else {
        // This handles the end of the game
        showFinalStats();
    }
}

// Function to load a random property
function loadRandomProperty() {
    // Generate random index
    const randomIndex = Math.floor(Math.random() * properties.length);
    currentPropertyIndex = randomIndex;

    // Load the random property
    loadProperty(properties[currentPropertyIndex]);

    // Hide results and reset form
    document.getElementById('results').classList.add('hidden');
    document.getElementById('arv-form').reset();
    document.getElementById('next-challenge-btn').disabled = true;

    // Scroll to top for new deal
    window.scrollTo(0, 0);
}

// Function to handle the end of the game (Placeholder for future feature)
function showFinalStats() {
    alert("Congratulations! You have analyzed all 50 deals. Feature to show final stats is coming soon!");
    // You could redirect, reset the game, or display a complex modal here
    document.getElementById('next-challenge-btn').disabled = true;
    document.getElementById('next-challenge-btn').textContent = "Game Complete!";
}

// Initialization: Load the very first property when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing first property...');
    console.log('Total properties:', properties.length);
    console.log('Current index:', currentPropertyIndex);
    if (properties && properties.length > 0) {
        loadProperty(properties[currentPropertyIndex]);
    } else {
        console.error('No properties found!');
    }
});

// Calculator Functions
function appendCalc(value) {
    const display = document.getElementById('calc-display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearCalc() {
    document.getElementById('calc-display').value = '0';
}

function backspaceCalc() {
    const display = document.getElementById('calc-display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function calculateCalc() {
    const display = document.getElementById('calc-display');
    try {
        // Replace × with * for eval
        const expression = display.value.replace(/×/g, '*');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}