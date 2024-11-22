import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { NutriLoginComponent } from './NutriLogin/NutriLogin.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './signUp/signUp.component';
import { DessertsComponent } from './desserts/desserts.component';
import { SaladsComponent } from './salads/salads.component';
import { CommunityComponent } from './community/community.component';
import { CoachComponent } from './coach/coach.component';
import { NutritionistComponent } from './nutritionist/nutritionist.component';
import { YogaComponent } from './yoga/yoga.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { BooknowComponent } from './booknow/booknow.component';
import { UsernutriComponent } from './usernutri/usernutri.component';
import { UseryogaComponent } from './useryoga/useryoga.component';
import { UsercoachComponent } from './usercoach/usercoach.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProfileService } from './profile.service';
import { MailsComponent } from './mails/mails.component';
import { DetailsComponent } from './details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { UpiComponent } from './upi/upi.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { Offer1Component } from './offer1/offer1.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SignUppComponent } from './signUpp/signUpp.component';
import { FinalofferComponent } from './finaloffer/finaloffer.component';
import { ReviewPageComponent } from './reviewPage/reviewPage.component';
import { CreditTableComponent } from './creditTable/creditTable.component';
import { DebitTableComponent } from './debitTable/debitTable.component';
import { UpiTableComponent } from './upiTable/upiTable.component';
import { CapitalizeePipe } from './Capitalizee.pipe';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      NutriLoginComponent,
      RegistrationComponent,
      SignUpComponent,
      DessertsComponent,
      SaladsComponent,
      CommunityComponent,
      CoachComponent,
      NutritionistComponent,
      YogaComponent,
      NavbarComponent,
      FooterComponent,
      GalleryComponent,
      OfferComponent,
      AdminComponent,
      ForgotComponent,
      BooknowComponent,
      UsernutriComponent,
      UseryogaComponent,
      UsercoachComponent,
      ConfirmComponent,
      MailsComponent,
      DetailsComponent,
      PaymentComponent,
      UpiComponent,
      DebitComponent,
      CreditComponent,
      Offer1Component,
      ThankyouComponent,
      CancellationComponent,
      SignUppComponent,
      FinalofferComponent,
      ReviewPageComponent,
      CreditTableComponent,
      DebitTableComponent,
      UpiTableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // CapitalizeePipe
  ],


  providers: [
   CapitalizeePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}


