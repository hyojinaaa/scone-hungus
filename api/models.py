from . import db


class Scone(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    place_name = db.Column(db.String(100))
    place_address = db.Column(db.String)
    flavour = db.Column(db.String(50))
    image = db.Column(db.String, nullable=True)
    rating = db.Column(db.Float)
    note = db.Column(db.String, nullable=True)
    cheese_on_top = db.Column(db.Boolean, nullable=True)

    def __init__(self, place_name, place_address, flavour, image, rating, note, cheese_on_top):
        self.place_name = place_name
        self.place_address = place_address
        self.flavour = flavour
        self.image = image
        self.rating = rating
        self.note = note
        self.cheese_on_top = cheese_on_top
