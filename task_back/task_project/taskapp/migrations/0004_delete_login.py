# Generated by Django 4.2.7 on 2023-11-20 05:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('taskapp', '0003_alter_todo_status'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Login',
        ),
    ]
