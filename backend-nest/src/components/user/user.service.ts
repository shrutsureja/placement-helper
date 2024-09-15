import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigType } from '@nestjs/config';
import serverConfig from 'src/config/config-list/server.config';
import { CreateUserDto } from './dtos/login-signup.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(serverConfig.KEY)
    private readonly serverConfiguration: ConfigType<typeof serverConfig>,
  ) {}
  async signUp(createUserDto: CreateUserDto): Promise<any> {
    try {
      const response = await axios.post(
        `https://${this.serverConfiguration.domain}/dbconnections/signup`,
        {
          client_id: this.serverConfiguration.clientId,
          email: createUserDto.email,
          password: createUserDto.password,
          name: createUserDto.name,
          connection: 'Username-Password-Authentication',
        },
      );

      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message || 'Error during sign-up');
    }
  }
  async login(loginDto: CreateUserDto): Promise<any> {
    try {
      const response = await axios.post(
        `https://${this.serverConfiguration.domain}/oauth/token`,
        {
          grant_type: 'client_credentials',
          username: loginDto.email,
          password: loginDto.password,
          audience: this.serverConfiguration.audience,
          client_id: this.serverConfiguration.clientId,
          client_secret: this.serverConfiguration.secret,
        },
      );

      return response.data;
    } catch (error) {
      throw new Error(
        error.response.data.error_description || 'Invalid credentials',
      );
    }
  }

  async findAll(page?): Promise<any> {
    try {
      const response = await axios.get(
        `${this.serverConfiguration.audience}users`,
        {
          headers: {
            Authorization: `Bearer ${this.serverConfiguration.mgmtApiAccessToken}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Error during sign-up');
    }
  }
}
