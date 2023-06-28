import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keycloak-frontend';
  username: string;
  isLogged: boolean ;
  isAdmin: boolean ;

  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8081/realms/tutorial',
    redirectUri: window.location.origin,
    clientId: 'tutorial-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
      .then(() => {
        console.log("this.oauthService.getIdentityClaims() >>>>  " + JSON.stringify(this.oauthService.getIdentityClaims()))
        if(this.oauthService.getIdentityClaims()) {
          this.isLogged = this.getIsLogged();
          this.isAdmin = this.getIsAdmin();
          this.username = this.oauthService.getIdentityClaims()['preferred_username'];
        }
      })
  }

  public getIsLogged(): boolean {
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getIsAdmin(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodedJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodedJson);
    console.log(payloadDecoded.realm_access.roles)
    console.log(payloadDecoded.realm_access.roles.indexOf('realm-admin') !== -1 ? "SOU ADMIN" : "SOU USER");
    return payloadDecoded.realm_access.roles.indexOf('realm-admin') !== -1;
  }
}
