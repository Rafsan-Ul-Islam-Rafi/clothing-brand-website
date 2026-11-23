import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_deck():
    prs = Presentation()
    # Set slide dimensions to widescreen 16:9 (13.33 x 7.5 inches)
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)

    # Color Palette (Black & Off-White Streetwear Theme)
    COLOR_BG = RGBColor(10, 11, 14)       # #0A0B0E Dark
    COLOR_CARD = RGBColor(20, 22, 29)     # #14161D Card Background
    COLOR_ACCENT = RGBColor(244, 240, 234) # #F4F0EA Off-White / Ivory
    COLOR_TEXT = RGBColor(248, 250, 252)  # White text
    COLOR_MUTED = RGBColor(161, 161, 170) # Secondary grey text
    COLOR_BKASH = RGBColor(226, 19, 110)  # bKash Pink

    blank_layout = prs.slide_layouts[6]

    def set_background(slide, color):
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = color

    def add_header(slide, tag_text, title_text):
        # Category Tag
        tx_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(11.7), Inches(0.4))
        tf = tx_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = tag_text.upper()
        p.font.size = Pt(11)
        p.font.bold = True
        p.font.color.rgb = COLOR_ACCENT
        
        # Main Slide Title
        tx_box_t = slide.shapes.add_textbox(Inches(0.8), Inches(0.8), Inches(11.7), Inches(0.8))
        tf_t = tx_box_t.text_frame
        tf_t.word_wrap = True
        p_t = tf_t.paragraphs[0]
        p_t.text = title_text
        p_t.font.size = Pt(28)
        p_t.font.bold = True
        p_t.font.color.rgb = COLOR_TEXT

    # -------------------------------------------------------------------------
    # SLIDE 1: Title Slide
    # -------------------------------------------------------------------------
    slide1 = prs.slides.add_slide(blank_layout)
    set_background(slide1, COLOR_BG)

    # Accent decorative box
    shape = slide1.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(2.2), Inches(0.15), Inches(3.2))
    shape.fill.solid()
    shape.fill.fore_color.rgb = COLOR_ACCENT
    shape.line.fill.background()

    # Title Text Box
    t_box = slide1.shapes.add_textbox(Inches(1.2), Inches(2.0), Inches(11.0), Inches(3.5))
    tf1 = t_box.text_frame
    tf1.word_wrap = True
    
    p1 = tf1.paragraphs[0]
    p1.text = "URBAN EDGE STREETWEAR"
    p1.font.size = Pt(44)
    p1.font.bold = True
    p1.font.color.rgb = COLOR_TEXT

    p2 = tf1.add_paragraph()
    p2.text = "E-Commerce Website & Brand Platform Presentation"
    p2.font.size = Pt(24)
    p2.font.color.rgb = COLOR_ACCENT
    p2.space_before = Pt(14)

    p3 = tf1.add_paragraph()
    p3.text = "Drop-Shoulder Tees (600 BDT) | Baggy Pants (750 BDT) | bKash & Delivery Integration"
    p3.font.size = Pt(14)
    p3.font.color.rgb = COLOR_MUTED
    p3.space_before = Pt(20)

    # -------------------------------------------------------------------------
    # SLIDE 2: Brand Identity & Executive Overview
    # -------------------------------------------------------------------------
    slide2 = prs.slides.add_slide(blank_layout)
    set_background(slide2, COLOR_BG)
    add_header(slide2, "BRAND OVERVIEW", "URBAN EDGE - Defy Ordinary Fashion")

    cards_data_s2 = [
        ("Niche Market Focus", "Dedicated strictly to high-demand men's streetwear essentials: Oversized Drop-Shoulder T-Shirts and Heavyweight Baggy Pants in Bangladesh."),
        ("Transparent Flat Pricing", "Simple, transparent pricing structure. All Drop-Shoulder Tees are 600 BDT and all Baggy Pants & Cargos are 750 BDT with zero hidden fees."),
        ("Localized Checkout Engine", "Tailored checkout logic supporting bKash Online Payment (Send Money/Cash Out with TrxID) and Cash on Delivery (COD) nationwide.")
    ]

    for idx, (head, body) in enumerate(cards_data_s2):
        left_pos = Inches(0.8 + idx * 3.9)
        card = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left_pos, Inches(2.0), Inches(3.7), Inches(4.5))
        card.fill.solid()
        card.fill.fore_color.rgb = COLOR_CARD
        card.line.color.rgb = COLOR_ACCENT
        card.line.width = Pt(1)

        tf = card.text_frame
        tf.word_wrap = True
        tf.margin_top = Inches(0.3)
        tf.margin_left = Inches(0.3)
        tf.margin_right = Inches(0.3)

        p = tf.paragraphs[0]
        p.text = head
        p.font.size = Pt(18)
        p.font.bold = True
        p.font.color.rgb = COLOR_ACCENT

        p_body = tf.add_paragraph()
        p_body.text = body
        p_body.font.size = Pt(13)
        p_body.font.color.rgb = COLOR_TEXT
        p_body.space_before = Pt(14)

    # -------------------------------------------------------------------------
    # SLIDE 3: Product Catalogue & Fixed Pricing Matrix
    # -------------------------------------------------------------------------
    slide3 = prs.slides.add_slide(blank_layout)
    set_background(slide3, COLOR_BG)
    add_header(slide3, "CATALOGUE & PRICING", "Product Matrix & Fixed BDT Rates")

    # Left Column: Drop Shoulder Tees
    card_l = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(1.9), Inches(5.6), Inches(4.8))
    card_l.fill.solid()
    card_l.fill.fore_color.rgb = COLOR_CARD
    card_l.line.color.rgb = COLOR_ACCENT
    
    tf_l = card_l.text_frame
    tf_l.word_wrap = True
    tf_l.margin_top = Inches(0.4)
    tf_l.margin_left = Inches(0.4)
    
    p = tf_l.paragraphs[0]
    p.text = "DROP-SHOULDER TEES"
    p.font.size = Pt(20)
    p.font.bold = True
    p.font.color.rgb = COLOR_TEXT

    p_p = tf_l.add_paragraph()
    p_p.text = "FIXED PRICE: 600 BDT"
    p_p.font.size = Pt(22)
    p_p.font.bold = True
    p_p.font.color.rgb = COLOR_ACCENT
    p_p.space_before = Pt(6)

    bullets_l = [
        "Fabric: 240 - 260 GSM Heavyweight French Terry Cotton",
        "Fit: Oversized silhouette with dropped armholes & thick rib collar",
        "Variants: Midnight Acid, Raw Vintage, Cyber Olive, Minimalist Beige, Cobalt Drift, Ghost White",
        "Sizes Available: Medium (M), Large (L), Extra Large (XL), Double XL (XXL)"
    ]
    for b in bullets_l:
        p_b = tf_l.add_paragraph()
        p_b.text = "• " + b
        p_b.font.size = Pt(12)
        p_b.font.color.rgb = COLOR_MUTED
        p_b.space_before = Pt(8)

    # Right Column: Baggy Pants
    card_r = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(1.9), Inches(5.7), Inches(4.8))
    card_r.fill.solid()
    card_r.fill.fore_color.rgb = COLOR_CARD
    card_r.line.color.rgb = COLOR_ACCENT

    tf_r = card_r.text_frame
    tf_r.word_wrap = True
    tf_r.margin_top = Inches(0.4)
    tf_r.margin_left = Inches(0.4)

    p_r = tf_r.paragraphs[0]
    p_r.text = "BAGGY PANTS & CARGOS"
    p_r.font.size = Pt(20)
    p_r.font.bold = True
    p_r.font.color.rgb = COLOR_TEXT

    p_pr = tf_r.add_paragraph()
    p_pr.text = "FIXED PRICE: 750 BDT"
    p_pr.font.size = Pt(22)
    p_pr.font.bold = True
    p_pr.font.color.rgb = COLOR_ACCENT
    p_pr.space_before = Pt(6)

    bullets_r = [
        "Fabric: 14oz Rigid Denim, Heavy Ripstop Cotton & Parachute Nylon",
        "Fit: Wide-leg skater drape with ankle drawstrings & multi-pockets",
        "Variants: Obsidian Tactical Cargo, 90s Relic Denim, Parachute V2, Retro Earth Pleated, Carpenter Craft",
        "Sizes Available: Waist 28\" - 38\" (M, L, XL, XXL Sizing Matrix)"
    ]
    for b in bullets_r:
        p_br = tf_r.add_paragraph()
        p_br.text = "• " + b
        p_br.font.size = Pt(12)
        p_br.font.color.rgb = COLOR_MUTED
        p_br.space_before = Pt(8)

    # -------------------------------------------------------------------------
    # SLIDE 4: Delivery & Shipping Charge Structure
    # -------------------------------------------------------------------------
    slide4 = prs.slides.add_slide(blank_layout)
    set_background(slide4, COLOR_BG)
    add_header(slide4, "LOGISTICS & SHIPPING", "Nationwide Delivery Charge Matrix")

    d_card1 = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(1.2), Inches(2.2), Inches(5.2), Inches(4.2))
    d_card1.fill.solid()
    d_card1.fill.fore_color.rgb = COLOR_CARD
    d_card1.line.color.rgb = COLOR_ACCENT
    tf_d1 = d_card1.text_frame
    tf_d1.word_wrap = True
    tf_d1.margin_left = Inches(0.4)
    tf_d1.margin_top = Inches(0.4)

    p = tf_d1.paragraphs[0]
    p.text = "INSIDE DHAKA"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = COLOR_TEXT

    p_sub = tf_d1.add_paragraph()
    p_sub.text = "80 BDT Delivery Fee"
    p_sub.font.size = Pt(26)
    p_sub.font.bold = True
    p_sub.font.color.rgb = COLOR_ACCENT
    p_sub.space_before = Pt(10)

    p_desc = tf_d1.add_paragraph()
    p_desc.text = "• 24 - 48 Hours Express Delivery\n• Direct home delivery rider service\n• Cash on delivery or bKash prepaid\n• Live tracking via Order ID"
    p_desc.font.size = Pt(13)
    p_desc.font.color.rgb = COLOR_MUTED
    p_desc.space_before = Pt(14)

    d_card2 = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.9), Inches(2.2), Inches(5.2), Inches(4.2))
    d_card2.fill.solid()
    d_card2.fill.fore_color.rgb = COLOR_CARD
    d_card2.line.color.rgb = COLOR_ACCENT
    tf_d2 = d_card2.text_frame
    tf_d2.word_wrap = True
    tf_d2.margin_left = Inches(0.4)
    tf_d2.margin_top = Inches(0.4)

    p2 = tf_d2.paragraphs[0]
    p2.text = "OUTSIDE DHAKA"
    p2.font.size = Pt(22)
    p2.font.bold = True
    p2.font.color.rgb = COLOR_TEXT

    p2_sub = tf_d2.add_paragraph()
    p2_sub.text = "120 BDT Delivery Fee"
    p2_sub.font.size = Pt(26)
    p2_sub.font.bold = True
    p2_sub.font.color.rgb = COLOR_ACCENT
    p2_sub.space_before = Pt(10)

    p2_desc = tf_d2.add_paragraph()
    p2_desc.text = "• 2 - 4 Days Nationwide Courier Service\n• Covers all 64 districts in Bangladesh\n• Secure parcel packaging\n• SMS / Phone notification before delivery"
    p2_desc.font.size = Pt(13)
    p2_desc.font.color.rgb = COLOR_MUTED
    p2_desc.space_before = Pt(14)

    # -------------------------------------------------------------------------
    # SLIDE 5: Payment Gateways (bKash & COD)
    # -------------------------------------------------------------------------
    slide5 = prs.slides.add_slide(blank_layout)
    set_background(slide5, COLOR_BG)
    add_header(slide5, "PAYMENT GATEWAYS", "bKash Online Payment & Cash on Delivery")

    # bKash Card
    bkash_card = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(2.0), Inches(5.7), Inches(4.5))
    bkash_card.fill.solid()
    bkash_card.fill.fore_color.rgb = COLOR_CARD
    bkash_card.line.color.rgb = COLOR_BKASH
    bkash_card.line.width = Pt(2)

    tf_bk = bkash_card.text_frame
    tf_bk.word_wrap = True
    tf_bk.margin_left = Inches(0.4)
    tf_bk.margin_top = Inches(0.4)

    p = tf_bk.paragraphs[0]
    p.text = "bKash Online Payment"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = COLOR_BKASH

    p_num = tf_bk.add_paragraph()
    p_num.text = "bKash Personal No: 01712-345678"
    p_num.font.size = Pt(16)
    p_num.font.bold = True
    p_num.font.color.rgb = COLOR_TEXT
    p_num.space_before = Pt(8)

    steps = [
        "1. Open bKash App or dial *247#",
        "2. Select Send Money / Cash Out to 01712-345678",
        "3. Enter Total Amount (Subtotal + Delivery Charge)",
        "4. Enter bKash Sender Number & TrxID at checkout",
        "5. Automatic order validation & instant printable receipt"
    ]
    for st in steps:
        p_st = tf_bk.add_paragraph()
        p_st.text = st
        p_st.font.size = Pt(12)
        p_st.font.color.rgb = COLOR_MUTED
        p_st.space_before = Pt(6)

    # COD Card
    cod_card = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(6.8), Inches(2.0), Inches(5.7), Inches(4.5))
    cod_card.fill.solid()
    cod_card.fill.fore_color.rgb = COLOR_CARD
    cod_card.line.color.rgb = COLOR_ACCENT

    tf_cod = cod_card.text_frame
    tf_cod.word_wrap = True
    tf_cod.margin_left = Inches(0.4)
    tf_cod.margin_top = Inches(0.4)

    p_c = tf_cod.paragraphs[0]
    p_c.text = "Cash on Delivery (COD)"
    p_c.font.size = Pt(22)
    p_c.font.bold = True
    p_c.font.color.rgb = COLOR_ACCENT

    cod_points = [
        "• Available for both Inside Dhaka and Outside Dhaka orders",
        "• Pay exact cash to courier rider upon parcel arrival",
        "• Zero advance payment required for trusted customers",
        "• Instant order confirmation & WhatsApp notification"
    ]
    for cp in cod_points:
        p_cp = tf_cod.add_paragraph()
        p_cp.text = cp
        p_cp.font.size = Pt(13)
        p_cp.font.color.rgb = COLOR_TEXT
        p_cp.space_before = Pt(14)

    # -------------------------------------------------------------------------
    # SLIDE 6: Customer Support & Contact Integration
    # -------------------------------------------------------------------------
    slide6 = prs.slides.add_slide(blank_layout)
    set_background(slide6, COLOR_BG)
    add_header(slide6, "CUSTOMER CONTACT", "Omnichannel Support & WhatsApp Integration")

    contacts = [
        ("WhatsApp Direct Chat", "+880 1712-345678", "Instant click-to-chat integration (https://wa.me/8801712345678) with prefilled order details for fast size advice & order updates."),
        ("Official Email Support", "support@urbanedge.bd", "Direct mailto: link for customer support, exchange requests, and wholesale/bulk order inquiries."),
        ("Showroom Location", "Banani, Dhaka - 1213", "Level 4, Plot 12, Road 11, Banani, Dhaka. Open 10:00 AM - 10:00 PM everyday for physical fitting & size exchange.")
    ]

    for idx, (title, detail, desc) in enumerate(contacts):
        left = Inches(0.8 + idx * 3.9)
        c_shape = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.0), Inches(3.7), Inches(4.5))
        c_shape.fill.solid()
        c_shape.fill.fore_color.rgb = COLOR_CARD
        c_shape.line.color.rgb = COLOR_ACCENT

        tf = c_shape.text_frame
        tf.word_wrap = True
        tf.margin_left = Inches(0.3)
        tf.margin_top = Inches(0.3)

        p = tf.paragraphs[0]
        p.text = title
        p.font.size = Pt(16)
        p.font.bold = True
        p.font.color.rgb = COLOR_ACCENT

        p_det = tf.add_paragraph()
        p_det.text = detail
        p_det.font.size = Pt(17)
        p_det.font.bold = True
        p_det.font.color.rgb = COLOR_TEXT
        p_det.space_before = Pt(6)

        p_desc = tf.add_paragraph()
        p_desc.text = desc
        p_desc.font.size = Pt(12)
        p_desc.font.color.rgb = COLOR_MUTED
        p_desc.space_before = Pt(12)

    # -------------------------------------------------------------------------
    # SLIDE 7: Summary & Platform Technical Features
    # -------------------------------------------------------------------------
    slide7 = prs.slides.add_slide(blank_layout)
    set_background(slide7, COLOR_BG)
    add_header(slide7, "SUMMARY", "Platform Features & Live Deployment")

    summary_box = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(2.0), Inches(11.7), Inches(4.5))
    summary_box.fill.solid()
    summary_box.fill.fore_color.rgb = COLOR_CARD
    summary_box.line.color.rgb = COLOR_ACCENT

    tf_s = summary_box.text_frame
    tf_s.word_wrap = True
    tf_s.margin_left = Inches(0.5)
    tf_s.margin_top = Inches(0.4)

    p = tf_s.paragraphs[0]
    p.text = "Key Features Summary"
    p.font.size = Pt(22)
    p.font.bold = True
    p.font.color.rgb = COLOR_ACCENT

    summary_items = [
        "✔ Modern Streetwear Design System: Clean Minimalist Black & Off-White aesthetic with responsive grid layout.",
        "✔ Dynamic E-Commerce Engine: Interactive Cart Drawer, size selector (M to XXL), quick view modal, and live delivery fee recalculations.",
        "✔ Full Order Receipt & History: Printable order receipts with unique Order IDs (#UE-XXXXX) saved to browser LocalStorage.",
        "✔ Live Preview Server: Hosted on http://localhost:8080 ready for immediate customer testing."
    ]

    for item in summary_items:
        p_item = tf_s.add_paragraph()
        p_item.text = item
        p_item.font.size = Pt(14)
        p_item.font.color.rgb = COLOR_TEXT
        p_item.space_before = Pt(14)

    # Save presentation
    output_filename = "URBAN_EDGE_Streetwear_Presentation.pptx"
    output_path = os.path.join(os.getcwd(), output_filename)
    prs.save(output_path)
    print(f"Presentation saved to: {output_path}")

if __name__ == "__main__":
    create_deck()
