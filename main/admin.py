from django.contrib import admin
from .models import Developer, Question, Choice

# Register your models here.
admin.site.register(Developer)
admin.site.register(Question)
admin.site.register(Choice)