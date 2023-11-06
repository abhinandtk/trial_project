# Generated by Django 4.2.7 on 2023-11-06 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(max_length=200)),
                ('status', models.CharField(choices=[('completed', 'completed'), ('incomplete', 'incomplete')], max_length=200)),
            ],
        ),
    ]