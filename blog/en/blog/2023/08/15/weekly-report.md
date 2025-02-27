---
title: "Biweekly Report (July 31 - August 13)"
keywords: 
- Apache APISIX
- API Gateway
- Weekly Report
- Contributor
description: The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.
tags: [Community]
image: https://static.apiseven.com/uploads/2023/08/15/cOgKwDgK_%E8%8B%B1%E6%96%87%E5%A4%B4%E5%9B%BE.png
---

> We have recently made fixes and improvements to certain features of Apache APISIX. These include the addition of the `chaitin-waf` plugin, support for configuring TLS handshake protocol features for specified SNI, YAML configuration file support for rendering configurations from environment variables, and ensuring that the `Limit-count` plugin returns the correct X-RateLimit-Reset when rejecting requests. For more details, please refer to the current bi-weekly report.

<!--truncate-->

## Introduction

Apache APISIX grew up as a community from the first day it was open-sourced, and quickly became the most active open-source API gateway project in the world. These achievements are inseparable from the joint efforts of community partners.

From 7.31 to 8.13, 20 contributors submitted 37 commits for Apache APISIX. Thank you for your contributions to Apache APISIX.

We have recently fixed and improved some features, and the summary of the updates is as follows:

1. Support `chaitin-waf` plugin

2. Support host level dynamic setting of tls protocol version

3. YAML configuration file supports rendering configurations from environment variables

4. X-RateLimit-Reset shouldn't be set to 0 after request be rejected

"If you want to go fast, go alone. If you want to go far, go together." The Apache APISIX Community Biweekly Report can help community members better grasp the progress of the Apache APISIX community so that everyone can participate in the Apache APISIX community.

## Contributor Statistics

![Apache APISIX Contributors List](https://static.apiseven.com/uploads/2023/08/15/DqCcoQzK_%E6%89%80%E6%9C%89%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A5.png)

![Apache APISIX New Contributors](https://static.apiseven.com/uploads/2023/08/15/2NOHboO6_%E6%96%B0%E6%99%8B%E8%B4%A1%E7%8C%AE%E8%80%85%E6%B5%B7%E6%8A%A50731-0813.png)

## Highlights of Recent Features

### Apache APISIX

- [Add `chaitin-waf` plugin](https://github.com/apache/apisix/pull/9838) (Contributor: [lingsamuel](https://github.com/lingsamuel))

- [Add support for configuring TLS handshake protocol for specified SNI](https://github.com/apache/apisix/pull/9903) (Contributor: [AlinsRan](https://github.com/AlinsRan))

- [YAML configuration file supports rendering configurations from environment variables](https://github.com/apache/apisix/pull/9855) (Contributor: [shreemaan-abhishek](https://github.com/shreemaan-abhishek))

- [`Limit-count` plugin returns the correct X-RateLimit-Reset when rejecting requests](https://github.com/apache/apisix/pull/9978) (Contributor: [jiangfucheng](https://github.com/jiangfucheng))

## Recent Blog Recommendations

- [Rate Limit Your APIs With Apache APISIX](https://apisix.apache.org/blog/2023/08/14/rate-limit/)
  
  In this article, we will look at examples of how we can use the rate limiting plugins in APISIX. You can find the complete configuration files and instructions to deploy for this article in this repository.

- [Release Apache APISIX 3.4.1](https://apisix.apache.org/blog/2023/07/21/release-apache-apisix-3.4.1/)

  We are pleased to present Apache APISIX 3.4.1 with a security patch for JWT.

- [Accelerating API Gateway Excellence: Apache APISIX Community Meetup in Malaysia](https://apisix.apache.org/blog/2023/07/11/2023-apisix-meetup-malaysia/)
  
  Kuala Lumpur, the capital of Malaysia, witnessed the success of the 2023 APISIX open-source Community Meetup on July 4th.

A wealth of documentation tutorials and experience has been accumulated on the Apache APISIX official website and GitHub. If you encounter problems, you can look into the documentation, search keywords in the issues, or participate in the discussion on the issues, proposing your own ideas and practical experience.
