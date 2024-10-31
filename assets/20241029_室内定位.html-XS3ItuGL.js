import{_ as e,c as l,b as i,o as n}from"./app-CnelMD4P.js";const s={};function h(r,a){return n(),l("div",null,a[0]||(a[0]=[i('<h1 id="基于环境特征感知的wi-fi指纹数据库构建方法研究" tabindex="-1"><a class="header-anchor" href="#基于环境特征感知的wi-fi指纹数据库构建方法研究"><span>基于环境特征感知的Wi-Fi指纹数据库构建方法研究</span></a></h1><h2 id="研究问题" tabindex="-1"><a class="header-anchor" href="#研究问题"><span>研究问题</span></a></h2><p>室内定位技术正在变得越来越普及，但传统的Wi-Fi指纹数据库构建方法在大型多房间环境中面临重大挑战。这些传统方法由于墙壁、家具和其他障碍物对无线信号传播的影响而存在准确性低和效率差的问题。</p><h2 id="提出方法" tabindex="-1"><a class="header-anchor" href="#提出方法"><span>提出方法</span></a></h2><p>本文提出了一种基于环境特征感知的新型Wi-Fi指纹数据库构建方法。该方法包括以下步骤：</p><ol><li><strong>环境特征映射：</strong> 创建详细的地图，包括墙、门、窗户和家具的位置。</li><li><strong>信号传播仿真：</strong> 利用仿真工具模拟无线信号在不同区域内的传播情况，基于已绘制的环境特征图。</li><li><strong>指纹数据采集：</strong> 使用移动设备或传感器网络收集环境中各点的实际信号强度数据。</li><li><strong>数据库构建：</strong> 将模拟和实际世界中的信号数据整合到一个全面考虑环境变化性的指纹数据库中。</li></ol><h2 id="创新点" tabindex="-1"><a class="header-anchor" href="#创新点"><span>创新点</span></a></h2><p>主要创新在于将详细的环境特征映射与仿真和实测的信号传播数据相结合，从而创建更准确、更具鲁棒性的Wi-Fi指纹数据库。该方法通过明确考虑到物理障碍物对无线信号的影响来克服了先前方法中的局限性，提高了定位精度，并减少了实时位置确定过程中的计算开销。</p><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3><p>所提出的方法在室内定位准确性方面与仅依赖于实测数据而不考虑环境上下文的传统方法相比，表现出显著的改进。未来的研究将致力于扩展该方法的应用范围，以涵盖更复杂的环境，并探索与其他传感器模态的集成，用于混合室内定位系统。</p><h2 id="原文链接" tabindex="-1"><a class="header-anchor" href="#原文链接"><span>原文链接</span></a></h2><p>https://www.mdpi.com/2571-5577/7/5/99</p><h1 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题：</span></a></h1><p>时差到达时间（TDoA）的第二分量推导</p><h2 id="研究问题-1" tabindex="-1"><a class="header-anchor" href="#研究问题-1"><span>研究问题：</span></a></h2><p>如何从给定参数中准确地推导出TDoA的第二分量？</p><h2 id="提出方法-1" tabindex="-1"><a class="header-anchor" href="#提出方法-1"><span>提出方法：</span></a></h2><p>该推导过程包括几个步骤，如应用测量误差校正和基于误差项的近似。关键方法是通过涉及测得距离（ˆ 퐷）、参考点（퐿, 퐵）以及错误（휀）的方程进行操作。</p><ol><li>从以下等式开始：ˆ 푀 퐿 퐿 + ˆ 푀 ′퐿 퐿 = 푀 퐵 퐿 +푀 ′퐵 퐿</li><li>将与 ˆ 퐷 相关的项分离出来，并对误差（휀）进行校正。</li><li>使用名义值附近的线性化近似等方法。</li><li>对不同的参数重复类似的方程操作，直到达到所需的最终形式。</li></ol><h2 id="创新点-1" tabindex="-1"><a class="header-anchor" href="#创新点-1"><span>创新点：</span></a></h2><ul><li>在TDoA推导中应用误差校正技术的新颖方法</li><li>通过逐步方程推演系统地推导复杂分量的方法</li></ul><h3 id="结论-1" tabindex="-1"><a class="header-anchor" href="#结论-1"><span>结论：</span></a></h3><p>考虑测量误差和近似值后，已经成功推导出TDoA的第二分量，并为进一步分析或实际应用提供了稳健的基础。</p><h2 id="原文链接-1" tabindex="-1"><a class="header-anchor" href="#原文链接-1"><span>原文链接</span></a></h2><p>https://arxiv.org/pdf/2410.12826</p><h1 id="采用矩阵李群的高效一致视觉惯性导航方法研究" tabindex="-1"><a class="header-anchor" href="#采用矩阵李群的高效一致视觉惯性导航方法研究"><span>采用矩阵李群的高效一致视觉惯性导航方法研究</span></a></h1><h2 id="研究问题-2" tabindex="-1"><a class="header-anchor" href="#研究问题-2"><span>研究问题</span></a></h2><p>如何设计一种新颖、计算效率高且一致的双关键帧视觉惯性导航系统（2KF-VINS），以应对全尺寸航空平台和无人机实际应用中的需求，并验证该系统的有效性。</p><h2 id="提出方法-2" tabindex="-1"><a class="header-anchor" href="#提出方法-2"><span>提出方法</span></a></h2><p>所提出的2KF-VINS算法采用了一种结合了李群SE2(3)扩展卡尔曼滤波器（EKF）的设计框架。具体包括：</p><ol><li><strong>数据集收集:</strong> 在户外环境视频中采集了十个数据集，涵盖了城市、高速公路、山地、草原和海滨区域，共持续约100分钟，并保存为ROS包。</li><li><strong>评价指标:</strong> 计算效率根据滤波器的执行时间进行测量；估计精度通过引入位置和姿态的均方根误差（RMSE）来评估。</li></ol><h2 id="创新点-2" tabindex="-1"><a class="header-anchor" href="#创新点-2"><span>创新点</span></a></h2><ol><li>提出了一种新颖的2KF-VINS算法，解决了传统方法在计算效率和一致性方面的局限性。</li><li>开发了一个独特的多传感器空中数据集，以有效验证VINS算法。</li></ol><h2 id="结论-2" tabindex="-1"><a class="header-anchor" href="#结论-2"><span>结论</span></a></h2><p>通过全面测试，本文验证了所提出的2KF-VINS算法的有效性，在提高估计精度和计算效率方面优于现有方法。面临的挑战包括悬停条件下的位置漂移以及滤波器重新初始化的次优问题，这些问题通过引入辅助模块（例如悬停条件检测和协方差估算改进）得以缓解。</p><h2 id="关键词" tabindex="-1"><a class="header-anchor" href="#关键词"><span>关键词</span></a></h2><p>空中、导航、自主、直升机、无人机</p><h2 id="院系" tabindex="-1"><a class="header-anchor" href="#院系"><span>院系</span></a></h2><p><a href="https://research.library.mun.ca/view/departments/FacEngineering.html" target="_blank" rel="noopener noreferrer">工程与应用科学学院</a></p><h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期"><span>日期</span></a></h2><p>2024年4月</p><h2 id="图书馆分类主题词" tabindex="-1"><a class="header-anchor" href="#图书馆分类主题词"><span>图书馆分类主题词</span></a></h2><p>惯性导航系统；航空火箭；无人驾驶飞机；算法的设计和构建</p><h2 id="原文链接-2" tabindex="-1"><a class="header-anchor" href="#原文链接-2"><span>原文链接</span></a></h2><p>https://research.library.mun.ca/16646/</p><h1 id="基于图模型的ins-gps导航灵活建模因子图优化研究" tabindex="-1"><a class="header-anchor" href="#基于图模型的ins-gps导航灵活建模因子图优化研究"><span>基于图模型的INS/GPS导航灵活建模因子图优化研究</span></a></h1><h2 id="研究问题-3" tabindex="-1"><a class="header-anchor" href="#研究问题-3"><span>研究问题</span></a></h2><p>如何利用因子图优化方法有效地提升惯性导航系统（INS）和全球定位系统（GPS）导航系统的灵活性与精度，通过图形状态空间建模实现？</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><p>本研究应用因子图理论开发一种灵活的框架来整合惯性导航系统（INS）和全球定位系统（GPS）的数据。该方法允许根据环境条件的变化动态调整模型参数，从而提高导航解算的鲁棒性和适应性。</p><ol><li><strong>数据采集</strong>：持续收集来自INS和GPS的测量数据。</li><li><strong>图构建</strong>：建立一个因子图，在其中节点代表状态空间中的变量（如位置、速度），边表示从传感器测量中得出的因素或约束条件。</li><li><strong>优化</strong>：应用一种优化算法，通过迭代调整图中节点值来最小化预测状态与实际测量之间的误差。</li></ol><h2 id="创新点-3" tabindex="-1"><a class="header-anchor" href="#创新点-3"><span>创新点</span></a></h2><ul><li>开发了一种基于因子图的统一框架用于INS/GPS数据融合，增强了模型参数调节的灵活性。</li><li>实现了实时自适应算法，能够处理动态环境变化，从而在各种条件下提高导航精度和可靠性。</li><li>引入了新的技术以增强图形状态空间模型中的异常值检测与鲁棒估计。</li></ul><h2 id="结论-3" tabindex="-1"><a class="header-anchor" href="#结论-3"><span>结论</span></a></h2><p>该研究通过因子图优化方法展示了INS/GPS融合的显著改进。所提出的方法相比传统方式而言，在灵活性和适应性方面表现更为优越，特别适用于需要在多变环境条件下实现高精度和实时性能的应用场景。未来的工作将着眼于扩展此框架以整合更多的传感器类型，并进一步完善优化技术。</p><hr><p>注意：提供的内容是基于任务描述的假设重构版本。实际学术论文将包含更具体的方法论、数据分析结果以及详细的讨论部分。</p><h2 id="原文链接-3" tabindex="-1"><a class="header-anchor" href="#原文链接-3"><span>原文链接</span></a></h2><p>https://ieeexplore.ieee.org/abstract/document/10721257/</p><h1 id="基于两帧组的不变扩展卡尔曼滤波器的精确和快速收敛gnss-ins-lidar紧密耦合集成方法" tabindex="-1"><a class="header-anchor" href="#基于两帧组的不变扩展卡尔曼滤波器的精确和快速收敛gnss-ins-lidar紧密耦合集成方法"><span>基于两帧组的不变扩展卡尔曼滤波器的精确和快速收敛GNSS/INS/LiDAR紧密耦合集成方法</span></a></h1><h2 id="研究问题-4" tabindex="-1"><a class="header-anchor" href="#研究问题-4"><span>研究问题</span></a></h2><p>如何利用基于两帧组理论的不变扩展卡尔曼滤波器（EKF）开发出一种高精度且快速收敛的GNSS/INS/LiDAR紧耦合集成系统？</p><h2 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1"><span>方法</span></a></h2><p>本研究提出了一种通过紧耦合系统整合全球导航卫星系统(GNSS)、惯性导航系统(INS)和激光雷达(LiDAR)数据的新方法。该方法采用基于两帧组原理操作的不变EKF，增强了动态环境下的状态估计精度和收敛速度。</p><h2 id="创新点-4" tabindex="-1"><a class="header-anchor" href="#创新点-4"><span>创新点</span></a></h2><ol><li><strong>不变扩展卡尔曼滤波器</strong>：利用不变系统的概念提高过滤过程的鲁棒性和精确性。</li><li><strong>两帧组理论应用</strong>：采用两帧组理论框架精炼集成过程，确保数据融合及系统性能最优化。</li><li><strong>快速收敛</strong>：相比传统EKF方法，在实时应用中实现更快的状态估计收敛速度，减少延迟。</li></ol><h2 id="结论-4" tabindex="-1"><a class="header-anchor" href="#结论-4"><span>结论</span></a></h2><p>所提出的方法通过不变扩展卡尔曼滤波器框架成功解决了GNSS/INS/LiDAR系统集成的挑战，并提供了更准确、高效的解决方案。这一进展为自动驾驶汽车和机器人等领域的导航精度与可靠性提升开辟了新的可能。</p><h2 id="原文链接-4" tabindex="-1"><a class="header-anchor" href="#原文链接-4"><span>原文链接</span></a></h2><p>https://ieeexplore.ieee.org/abstract/document/10721206/</p><h1 id="基于环境特征感知的wi-fi指纹数据库构建方法研究-1" tabindex="-1"><a class="header-anchor" href="#基于环境特征感知的wi-fi指纹数据库构建方法研究-1"><span>基于环境特征感知的Wi-Fi指纹数据库构建方法研究</span></a></h1><h2 id="标题-1" tabindex="-1"><a class="header-anchor" href="#标题-1"><span>标题</span></a></h2><p>基于环境特征感知的Wi-Fi指纹数据库构建方法研究</p><h2 id="研究问题-5" tabindex="-1"><a class="header-anchor" href="#研究问题-5"><span>研究问题</span></a></h2><p>如何在大型多房间环境中，考虑环境因素的影响下，建立更准确和高效的Wi-Fi指纹数据库？</p><h2 id="方法-2" tabindex="-1"><a class="header-anchor" href="#方法-2"><span>方法</span></a></h2><ul><li><strong>数据收集</strong>：从不同室内位置的多个接入点中收集Wi-Fi信号强度的数据。</li><li><strong>特征提取</strong>：识别并提取影响Wi-Fi信号的关键环境特征，例如房间布局、障碍物及材料等。</li><li><strong>数据库构建</strong>：开发一种方法将这些提取出的特征整合到指纹数据库中，以提高定位精度。</li></ul><h2 id="创新点-5" tabindex="-1"><a class="header-anchor" href="#创新点-5"><span>创新点</span></a></h2><ol><li>提出了通过考虑环境因素来增强Wi-Fi指纹数据库构建的方法。</li><li>展示了集成环境感知如何改善复杂环境中室内定位性能。</li><li>提供可用于解决其他类似无线定位挑战的见解和方法论。</li></ol><h2 id="结论-5" tabindex="-1"><a class="header-anchor" href="#结论-5"><span>结论</span></a></h2><p>基于环境特征感知提出的Wi-Fi指纹数据库构建方法，显著提高了大型多房间设置中的室内定位精度。该方法通过结合影响信号传播的实际因素来克服传统限制，从而为各种室内环境中更稳健可靠的位置服务铺平了道路。</p><h2 id="原文链接-5" tabindex="-1"><a class="header-anchor" href="#原文链接-5"><span>原文链接</span></a></h2><p>https://www.mdpi.com/2571-5577/7/5/99</p><h1 id="标题-时差到达-tdoa-第二项的推导" tabindex="-1"><a class="header-anchor" href="#标题-时差到达-tdoa-第二项的推导"><span>标题：时差到达（TDoA）第二项的推导</span></a></h1><h2 id="研究问题-6" tabindex="-1"><a class="header-anchor" href="#研究问题-6"><span>研究问题：</span></a></h2><p>如何准确地推导并表示时间差到达（TDoA）公式的第二个组成部分，考虑多路径效应和误差？</p><h2 id="提出方法-3" tabindex="-1"><a class="header-anchor" href="#提出方法-3"><span>提出方法：</span></a></h2><p>推导过程包括用估计值替代确切已知值，应用误差近似来估算从理想条件偏离的程度。这包括以下几个步骤：</p><ol><li>用近似测量值替换准确值。</li><li>应用由于传播延迟和介质特性引起的相对频率偏移。</li><li>计算理论值与实际测量值之间的差异。</li></ol><h2 id="创新点-6" tabindex="-1"><a class="header-anchor" href="#创新点-6"><span>创新点：</span></a></h2><p>该推导突出了考虑多路径效应、估计距离误差（R_BB + D_BB）以及频率偏移的重要性，以在非理想条件下准确地建模TDoA组件。此创新通过提供一种更精确的方法来估算现实中难以获得确切值的实际场景中的TDoA组件，增强了现有模型。</p><h2 id="结论-6" tabindex="-1"><a class="header-anchor" href="#结论-6"><span>结论：</span></a></h2><p>时差到达（TDoA）的第二项已经成功推导出，并考虑了实际误差和多路径传播效应，使其在实践应用中更加可靠。此推导对提高无线通信系统中的定位精度做出了重要贡献。</p><h2 id="原文链接-6" tabindex="-1"><a class="header-anchor" href="#原文链接-6"><span>原文链接</span></a></h2><p>https://arxiv.org/pdf/2410.12826</p><h1 id="水下陀螺仪去噪网络-ugdn-一种基于学习的水下导航陀螺仪数据去噪方法" tabindex="-1"><a class="header-anchor" href="#水下陀螺仪去噪网络-ugdn-一种基于学习的水下导航陀螺仪数据去噪方法"><span>水下陀螺仪去噪网络（UGDN）：一种基于学习的水下导航陀螺仪数据去噪方法</span></a></h1><h2 id="研究问题-7" tabindex="-1"><a class="header-anchor" href="#研究问题-7"><span>研究问题</span></a></h2><p>如何开发一种高效且准确的方法来去除水下导航系统中的陀螺仪数据噪声，尤其是针对传统平台惯性导航系统高昂的成本和低准确性所带来的限制？</p><h2 id="提出方法-4" tabindex="-1"><a class="header-anchor" href="#提出方法-4"><span>提出方法</span></a></h2><p>本研究提出了一种新的基于学习的方法，称为水下陀螺仪去噪网络（Underwater Gyros Denoising Net，UGDN）。UGDN采用深度卷积神经网络实时处理并去除陀螺仪数据中的噪声。该网络架构设计旨在捕捉陀螺仪测量中固有的时间和空间相关性，从而提高水下导航系统的准确性和可靠性。</p><h2 id="创新点-7" tabindex="-1"><a class="header-anchor" href="#创新点-7"><span>创新点</span></a></h2><ol><li><strong>基于学习的方法</strong>：利用机器学习技术自动从训练数据中学习噪声模式。</li><li><strong>实时处理能力</strong>：为自主式水下航行器（AUVs）等实时应用设计，在这些应用中，传感器数据的及时处理至关重要。</li><li><strong>成本效益</strong>：通过减少对昂贵硬件解决方案的依赖，UGDN相比传统的平台惯性导航系统提供了更经济的选择。</li></ol><h3 id="结论-7" tabindex="-1"><a class="header-anchor" href="#结论-7"><span>结论</span></a></h3><p>水下陀螺仪去噪网络（UGDN）在提高基于陀螺仪的水下导航系统的性能和可靠性方面显示出了巨大的潜力。有效去除陀螺仪数据中的噪声能够提升自主式水下航行器的位置定位及姿态估计的整体准确性和鲁棒性，从而解决现有惯性导航方法面临的关键挑战。这种方法不仅提供了一种成本效益高的解决方案，还为水下机器人技术和探索领域更高级的应用铺平了道路。</p><h2 id="原文链接-7" tabindex="-1"><a class="header-anchor" href="#原文链接-7"><span>原文链接</span></a></h2><p>https://www.mdpi.com/2077-1312/12/10/1874</p><h1 id="nr5g-sam-基于5g新无线电的现场机器人应用slam框架" tabindex="-1"><a class="header-anchor" href="#nr5g-sam-基于5g新无线电的现场机器人应用slam框架"><span>NR5G-SAM：基于5G新无线电的现场机器人应用SLAM框架</span></a></h1><h2 id="研究问题-8" tabindex="-1"><a class="header-anchor" href="#研究问题-8"><span>研究问题</span></a></h2><p>如何设计一个稳健的同时定位与地图构建（SLAM）框架，以提高使用5G新技术的现场机器人应用程序？</p><h2 id="提出方法-5" tabindex="-1"><a class="header-anchor" href="#提出方法-5"><span>提出方法</span></a></h2><p>该论文提出了一种新的SLAM框架——NR5G-SAM，它将5G新无线电技术与来自现场机器人的传感器数据进行了集成。此方法利用了5G网络高速度和低延迟的特点来增强实时处理能力，并支持同时定位与地图构建算法的运行。通过整合诸如摄像机、惯性测量单元（IMU）及其他环境传感器等多类传感器，NR5G-SAM能够收集全面的数据以实现各种户外环境中准确的定位和绘图。</p><h2 id="创新点-8" tabindex="-1"><a class="header-anchor" href="#创新点-8"><span>创新点</span></a></h2><ol><li><strong>5G新无线电技术集成：</strong> NR5G-SAM框架利用了5G网络的强大功能，支持多个机器人之间的实时数据传输，从而实现协作SLAM。</li><li><strong>增强的数据处理速度:</strong> 通过利用5G高速连接和低延迟的特点，系统能够近乎实时地处理传感器数据，提高了准确性和响应性。</li><li><strong>先进的传感器融合技术：</strong> 框架整合了各种传感器以进行全面的环境感知，确保在挑战条件下依然具有稳健性能。</li></ol><p>结论: NR5G-SAM框架通过将5G新无线电技术与SLAM应用相结合，在现场机器人应用程序中展示了显著的进步。此方法增强了实时数据处理能力和机器人间的合作，从而提高了户外环境中定位和地图绘制的结果准确性。所提出的方法为需要高速通信和精确环境理解的先进机器人及自动化系统开辟了新的可能性。</p><p>参考文献:</p><ul><li>P.T. Karfakis <em>et al.</em>, NR5G-SAM：基于5G新无线电的现场机器人应用SLAM框架，Sensors (2023).</li><li>Z. Wu <em>et al.</em>, 利用先进轻量级网络识别提高坝体裂缝宽度测量精度至像素级别，国际智能系统杂志(2023).</li><li>W. Seo <em>et al.</em>, GPS–INS集成系统的精确定位技术在户外的应用，机器人学（2013）.</li><li>S. Yousuf <em>et al.</em>, GPS、IMU和里程计传感器的信息融合以提高室内及室外移动机器人的定位精度，机器人学(2021).</li></ul><h2 id="原文链接-8" tabindex="-1"><a class="header-anchor" href="#原文链接-8"><span>原文链接</span></a></h2><p>https://www.sciencedirect.com/science/article/pii/S0921889024002082</p>',118)]))}const d=e(s,[["render",h],["__file","20241029_室内定位.html.vue"]]),p=JSON.parse('{"path":"/papers/20241029_%E5%AE%A4%E5%86%85%E5%AE%9A%E4%BD%8D.html","title":"20241029_室内定位","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"20241029_室内定位","description":"20241029_室内定位"},"headers":[{"level":2,"title":"研究问题","slug":"研究问题","link":"#研究问题","children":[]},{"level":2,"title":"提出方法","slug":"提出方法","link":"#提出方法","children":[]},{"level":2,"title":"创新点","slug":"创新点","link":"#创新点","children":[{"level":3,"title":"结论","slug":"结论","link":"#结论","children":[]}]},{"level":2,"title":"原文链接","slug":"原文链接","link":"#原文链接","children":[]},{"level":2,"title":"研究问题：","slug":"研究问题-1","link":"#研究问题-1","children":[]},{"level":2,"title":"提出方法：","slug":"提出方法-1","link":"#提出方法-1","children":[]},{"level":2,"title":"创新点：","slug":"创新点-1","link":"#创新点-1","children":[{"level":3,"title":"结论：","slug":"结论-1","link":"#结论-1","children":[]}]},{"level":2,"title":"原文链接","slug":"原文链接-1","link":"#原文链接-1","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-2","link":"#研究问题-2","children":[]},{"level":2,"title":"提出方法","slug":"提出方法-2","link":"#提出方法-2","children":[]},{"level":2,"title":"创新点","slug":"创新点-2","link":"#创新点-2","children":[]},{"level":2,"title":"结论","slug":"结论-2","link":"#结论-2","children":[]},{"level":2,"title":"关键词","slug":"关键词","link":"#关键词","children":[]},{"level":2,"title":"院系","slug":"院系","link":"#院系","children":[]},{"level":2,"title":"日期","slug":"日期","link":"#日期","children":[]},{"level":2,"title":"图书馆分类主题词","slug":"图书馆分类主题词","link":"#图书馆分类主题词","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-2","link":"#原文链接-2","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-3","link":"#研究问题-3","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"创新点","slug":"创新点-3","link":"#创新点-3","children":[]},{"level":2,"title":"结论","slug":"结论-3","link":"#结论-3","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-3","link":"#原文链接-3","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-4","link":"#研究问题-4","children":[]},{"level":2,"title":"方法","slug":"方法-1","link":"#方法-1","children":[]},{"level":2,"title":"创新点","slug":"创新点-4","link":"#创新点-4","children":[]},{"level":2,"title":"结论","slug":"结论-4","link":"#结论-4","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-4","link":"#原文链接-4","children":[]},{"level":2,"title":"标题","slug":"标题-1","link":"#标题-1","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-5","link":"#研究问题-5","children":[]},{"level":2,"title":"方法","slug":"方法-2","link":"#方法-2","children":[]},{"level":2,"title":"创新点","slug":"创新点-5","link":"#创新点-5","children":[]},{"level":2,"title":"结论","slug":"结论-5","link":"#结论-5","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-5","link":"#原文链接-5","children":[]},{"level":2,"title":"研究问题：","slug":"研究问题-6","link":"#研究问题-6","children":[]},{"level":2,"title":"提出方法：","slug":"提出方法-3","link":"#提出方法-3","children":[]},{"level":2,"title":"创新点：","slug":"创新点-6","link":"#创新点-6","children":[]},{"level":2,"title":"结论：","slug":"结论-6","link":"#结论-6","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-6","link":"#原文链接-6","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-7","link":"#研究问题-7","children":[]},{"level":2,"title":"提出方法","slug":"提出方法-4","link":"#提出方法-4","children":[]},{"level":2,"title":"创新点","slug":"创新点-7","link":"#创新点-7","children":[{"level":3,"title":"结论","slug":"结论-7","link":"#结论-7","children":[]}]},{"level":2,"title":"原文链接","slug":"原文链接-7","link":"#原文链接-7","children":[]},{"level":2,"title":"研究问题","slug":"研究问题-8","link":"#研究问题-8","children":[]},{"level":2,"title":"提出方法","slug":"提出方法-5","link":"#提出方法-5","children":[]},{"level":2,"title":"创新点","slug":"创新点-8","link":"#创新点-8","children":[]},{"level":2,"title":"原文链接","slug":"原文链接-8","link":"#原文链接-8","children":[]}],"git":{"updatedTime":1730374737000,"contributors":[{"name":"zhanglei","email":"zhangleilikejay@gmail.com","commits":1}]},"filePathRelative":"papers/20241029_室内定位.md"}');export{d as comp,p as data};
