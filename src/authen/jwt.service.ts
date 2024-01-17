// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import {
//     JwtPayload,
//     sign as jwtSign,
//     verify as jwtVerify,
//     decode as jwtDecode
//   } from 'jsonwebtoken'

// @Injectable()
// export class JwtAuthService {
//   constructor(private readonly jwtService: JwtService) {}

// //   async generateTokens(id: number, username: string): Promise<{ accessToken: string; refreshToken: string }> {
// //     const accessToken = await this.generateAccessToken(id, username);
// //     const refreshToken = await this.generateRefreshToken(id, username);

// //     return { accessToken, refreshToken };
// //   }

//   private async generateAccessToken(id: number, username: string): Promise<string> {
//     const payload = { sub: id, username };
//     return this.jwtService.signAsync(payload);
//   }

//   private async generateRefreshToken(userId: number, username: string): Promise<string> {
//     // Thêm logic tạo refresh token ở đây, có thể sử dụng cách mã hóa khác hoặc
//     // thực hiện thêm các xác minh bổ sung nếu cần thiết.
//     // Điều quan trọng là lưu ý rằng refresh token thường có thời hạn sống lâu hơn.
//     // Ví dụ: expiresIn: '7d' (7 ngày)
//     const refreshPayload = { sub: userId, username };
//     return this.jwtService.signAsync(refreshPayload);
//   }
// }

